import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Stack } from "expo-router";

const polls = [1, 2, 3, 4, 5];

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Polls",
          headerStyle: { backgroundColor: "lightblue" },
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <FlashList
        data={polls}
        contentContainerStyle={styles.container}
        estimatedItemSize={50}
        renderItem={({ item }) => (
          <View style={styles.pollContainer}>
            <Text style={styles.pollTitle}>Placeholder poll question</Text>
          </View>
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
  },
  pollTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
