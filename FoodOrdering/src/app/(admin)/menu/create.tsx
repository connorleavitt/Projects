import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import * as ImagePicker from "expo-image-picker";
import { Stack, router, useLocalSearchParams, useRouter } from "expo-router";
import {
  useDeleteProduct,
  useInsertProduct,
  useProduct,
  useUpdateProduct,
} from "@/api/products";

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(
    typeof idString === "string" ? idString : idString?.[0]
  );
  const isUpdating = !!idString;
  const router = useRouter();
  const { mutate: insertProduct } = useInsertProduct();
  const { mutate: updateProduct } = useUpdateProduct();
  const { data: updatingProduct } = useProduct(id);
  const { mutate: deleteProduct } = useDeleteProduct();

  useEffect(() => {
    if (updatingProduct) {
      setName(updatingProduct.name);
      setPrice(updatingProduct.price.toString());
      setImage(updatingProduct.image);
    }
  }, [updatingProduct]);

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const onDelete = () => {
    setLoading(true);

    deleteProduct(id, {
      onSuccess: () => {
        // resetFields();
        setLoading(false);
        router.replace("/(admin)");
      },
    });
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
    // if (!validateInput()) {
    //   return
    // }
    // console.warn("Create product", name, "with price: $", price);
    // save in db
    setLoading(true);

    insertProduct(
      { name, price: parseFloat(price), image },
      {
        onSuccess: () => {
          resetFields();
          setLoading(false);
          router.back();
        },
      }
    );
  };

  const onUpdate = () => {
    // console.warn("Update product", id, name, "with price: $", price);
    // update in db
    setLoading(true);

    updateProduct(
      { id, name, price: parseFloat(price), image },
      {
        onSuccess: () => {
          resetFields();
          setLoading(false);
          router.back();
        },
      }
    );
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
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
            value={name}
            onChangeText={setName}
            placeholder="Name"
            style={styles.input}
          />

          <Text style={styles.label}>Price ($)</Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            placeholder="9.99"
            style={styles.input}
            keyboardType="numeric"
          />
          <Button text={isUpdating ? "Update" : "Create"} onPress={onSubmit} />
          {isUpdating && (
            <Text style={styles.textButton} onPress={confirmDelete}>
              Delete
            </Text>
          )}
        </View>
      )}
    </>
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
