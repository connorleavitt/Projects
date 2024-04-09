import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Profile = () => {
  return (
    <View>
      <Button title="Log out" onPress={() => console.log("signed out")} />
      <Link href={"/(modals)/login"}>
        <Text>Log in</Text>
      </Link>
    </View>
  );
};

export default Profile;
