import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import { supabase } from "@/lib/supabase";
import Button from "components/Button";
import { router } from "expo-router";

const ProfileScreen = () => {
  const handleSignOut = async () => {
    console.log("signing out", supabase.auth.getUser());
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <View
      style={{
        flex: 1,
        margin: 10,
        alignItems: "center",
      }}
    >
      <Button text="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default ProfileScreen;
