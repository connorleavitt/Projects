import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const poll = {
  question: "This or That?",
  options: [
    { id: 1, text: "This" },
    { id: 2, text: "That" },
  ],
};

export default function PollDetails() {
  const { id } = useLocalSearchParams();

  const [selectedOption, setSelectedOption] = useState("");

  const vote = () => {
    console.warn("Voted", selectedOption);
  };

  return (
    <View>
      <Stack.Screen options={{ title: `Poll ${id} voting` }} />
      <Text style={styles.question}>{poll.question}</Text>
      <View style={{ gap: 10 }}>
        {poll.options.map((option) => (
          <Pressable
            onPress={() => setSelectedOption(option.text)}
            key={option.id}
            style={styles.optionContainer}
          >
            <AntDesign
              name={
                option.text === selectedOption ? "checkcircle" : "checkcircleo"
              }
              size={24}
              color={option.text === selectedOption ? "green" : "grey"}
            />
            <Text style={{ marginLeft: 10 }}>{option.text}</Text>
          </Pressable>
        ))}
      </View>
      <Button title="Vote" onPress={() => vote()} />
      {selectedOption && (
        <Button title="Remove vote" onPress={() => setSelectedOption("")} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    // padding: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
