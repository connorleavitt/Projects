import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function NewPoll() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["432", "123", "08767", "000"]);

  const submitPoll = () => {
    if (!question) {
      console.warn("Question is required");
      return;
    }
    if (options) {
      console.warn("Create Poll", question, options);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Create Poll",
          headerStyle: {
            backgroundColor: "lightgrey",
          },
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Link href="/">
              <FontAwesome
                name="angle-left"
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </Link>
          ),
        }}
      />
      <Text style={styles.label}>Title</Text>
      <TextInput
        value={question}
        onChangeText={setQuestion}
        style={styles.input}
        placeholder="Enter your question"
      />
      <Text style={styles.label}>Options</Text>
      {options.map((option, index) => (
        <View key={index} style={{ justifyContent: "center" }}>
          <TextInput
            value={option}
            onChangeText={(text) => {
              const newOptions = [...options];
              newOptions[index] = text;
              setOptions(newOptions);
            }}
            style={styles.input}
            placeholder={`Option ${index + 1}`}
          />
          <FontAwesome
            name="remove"
            size={24}
            color="black"
            style={{ position: "absolute", right: 10 }}
            onPress={() => setOptions(options.filter((_, i) => i !== index))}
            // onPress={() => {
            //   const update = [...options];
            //   delete update[index];
            //   setOptions(update);
            // }}
          />
        </View>
      ))}
      <Button title="Add Option" onPress={() => setOptions([...options, ""])} />
      {options.length > 2 && (
        <Button
          title="Remove Option"
          onPress={() => setOptions(options.slice(0, -1))}
        />
      )}

      {/* <Button title="Submit new poll" onPress={() => submitPoll()} /> */}
      <Button title="Submit new poll" onPress={submitPoll} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "gainsboro",
    padding: 10,
    gap: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    // marginVertical: 5,
  },
});
