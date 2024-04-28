import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { StyleSheet, View, Alert } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { Session } from "@supabase/supabase-js";
import { useAuth } from "@/providers/AuthProvider";
import { Link, Redirect, Stack, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
export default function ProfileScreen() {
  const { session, user } = useAuth();
  const [loading, setLoading] = useState(false);

  async function signOut() {
    setLoading(true);
    supabase.auth.signOut();

    setLoading(false);
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "lightgrey",
          },
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Link href="/">
              <FontAwesome name="chevron-left" size={24} color="black" />
            </Link>
          ),
        }}
      />
      <View style={{ padding: 10 }}>
        <Text>User id: {user?.id}</Text>
        <Text>User id: {user?.email}</Text>
        <Button title="Sign out" onPress={() => signOut()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
});
