import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Link, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const polls = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function HomeScreen() {
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
