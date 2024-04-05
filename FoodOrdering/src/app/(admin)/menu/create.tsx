import { View, Text, StyleSheet, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const onDelete = () => {
    console.warn("Delete product", id);
    // delete in db
    resetFields();
  };

  const confirmDelete = () => {
    // show alert
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",

          onPress: () => onDelete(),
        },
      ]
    );
  };

  //add real validation with zustand or similar library

  const onCreate = () => {
    console.warn("Create product", name, "with price: $", price);
    // save in db
    resetFields();
  };

  const onUpdate = () => {
    console.warn("Update product", id, name, "with price: $", price);
    // update in db
    resetFields();
  };

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Edit Pizza" : "Create Pizza" }}
      />
      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Name"
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="$9.99"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <Button text={isUpdating ? "Update" : "Create"} onPress={onSubmit} />
      {isUpdating && (
        <Text style={styles.textButton} onPress={confirmDelete}>
          Delete
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    // aspectRatio: 1,
    resizeMode: "contain",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "lightblue",
    textAlign: "center",
    marginVertical: 10,
  },
});
