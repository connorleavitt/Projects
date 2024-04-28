import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import AuthProvider from "@/providers/AuthProvider";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
