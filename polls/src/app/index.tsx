import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Link, Stack, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Poll } from "../types/db";

export default function HomeScreen() {
  const [polls, setPolls] = useState<Poll[]>([]);

  useEffect(() => {
    const fetchPolls = async () => {
      console.log("Fetching...");

      let { data, error } = await supabase.from("polls").select("*");
      if (error) {
        Alert.alert("Error fetching data");
      }
      setPolls(data as Poll[]);
    };
    fetchPolls();
  }, []);
  return (
    <>
      <Stack.Screen
        options={{
          title: "Polls",
          headerStyle: {
            backgroundColor: "lightgrey",
          },
          headerRight: () => (
            <Link href="/polls/new">
              <AntDesign name="pluscircleo" size={22} color="grey" />
            </Link>
          ),
          // headerRight: () => (
          //   <AntDesign
          //     onPress={() => router.push("/polls/new")}
          //     name="pluscircleo"
          //     size={22}
          //     color="grey"
          //   />
          // ),

          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <FlashList
        data={polls}
        contentContainerStyle={styles.container}
        estimatedItemSize={50}
        renderItem={({ item }) => (
          <Link href={`/polls/${item.id}`} style={styles.pollContainer}>
            <Text style={styles.pollTitle}>
              Placeholder poll question {item.id}
            </Text>
          </Link>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    padding: 10,
  },
  pollContainer: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  pollTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
