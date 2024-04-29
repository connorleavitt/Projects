import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Poll } from "@/types/db";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";

export default function PollDetails() {
  const { id } = useLocalSearchParams();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const { user } = useAuth();

  // if (!user) {
  //   return <Redirect href="/login" />;
  // }

  useEffect(() => {
    const fetchPolls = async () => {
      let { data, error } = await supabase
        .from("polls")
        .select("*")
        .eq("id", Number.parseInt(id as string))
        .single();
      if (error) {
        Alert.alert("Error fetching data");
      }
      setPoll(data as Poll);
    };
    fetchPolls();
  }, []);

  const vote = async () => {
    console.warn("Voted", selectedOption);

    const { data, error } = await supabase
      .from("votes")
      .insert([{ option: selectedOption, poll_id: poll.id, user_id: user.id }])
      .select();
  };
  if (!poll) {
    return (
      <ActivityIndicator
        size="large"
        color="black"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <View>
      <Stack.Screen options={{ title: `Poll ${id} voting` }} />
      <Text style={styles.question}>{poll.question}</Text>
      <View style={{ gap: 10 }}>
        {poll.options.map((option) => (
          <Pressable
            onPress={() => setSelectedOption(option)}
            key={option}
            style={styles.optionContainer}
          >
            <AntDesign
              name={option === selectedOption ? "checkcircle" : "checkcircleo"}
              size={24}
              color={option === selectedOption ? "green" : "grey"}
            />
            <Text style={{ marginLeft: 10 }}>{option}</Text>
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
