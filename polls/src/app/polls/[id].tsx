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
import { Poll, Vote } from "@/types/db";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";

export default function PollDetails() {
  const { id } = useLocalSearchParams();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const [userVote, setUserVote] = useState<Vote | null>(null);

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
    //fetch user vote
    const fetchUserVote = async () => {
      if (!user) {
        return;
      }
      let { data, error } = await supabase
        .from("votes")
        .select("*")
        .eq("user_id", user.id)
        .eq("poll_id", Number.parseInt(id as string))
        .limit(1)
        .single();
      if (error) {
        // console.log(error.message);
      }
      setUserVote(data as Vote);
      if (data) {
        setSelectedOption(data.option);
      } else {
        setSelectedOption("");
      }
    };
    fetchPolls();
    fetchUserVote();
  }, []);

  const vote = async () => {
    if (!selectedOption) {
      Alert.alert("Select an option to vote");
      return;
    }
    if (!poll?.id || !user?.id) {
      Alert.alert("Poll or user ID is missing");
      return;
    }
    const newVote: Vote = {
      option: selectedOption,
      poll_id: poll.id,
      user_id: user.id,
      id: userVote?.id || undefined,
    };

    const { data, error } = await supabase
      .from("votes")
      .upsert([newVote])
      .select()
      .single();
    if (error) {
      Alert.alert("Failed to vote");
      console.log(error.message);
      return;
    } else {
      setUserVote(data as Vote);
      Alert.alert("Voted successfully");
    }
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
      <View style={{ padding: 10 }}>
        <Text>Your vote: {userVote?.option}</Text>
      </View>
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
