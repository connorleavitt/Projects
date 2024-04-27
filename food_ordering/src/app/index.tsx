import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Button from "components/Button";
import { Link, Redirect } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/lib/supabase";

const index = () => {
  const { session, loading, isAdmin } = useAuth();
  // console.log("got here 2", !session, loading, isAdmin);
  if (loading) {
    return <ActivityIndicator />;
  }
  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }
  if (!isAdmin) {
    return <Redirect href={"/(user)"} />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      <Button
        text="Sign Out"
        onPress={async () => {
          console.log("signing out", await supabase.auth.getUser());
          supabase.auth.signOut();
        }}
      />
    </View>
  );
};

export default index;