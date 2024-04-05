import { Stack } from "expo-router";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "menu" }} />
      <Stack.Screen name="menu" />
      <Stack.Screen name="two" />
    </Stack>
  );
}
