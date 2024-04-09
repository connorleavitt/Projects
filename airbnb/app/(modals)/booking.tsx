import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { defaultStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  return (
    <View style={defaultStyles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="booking"
        style={defaultStyles.inputField}
      />
    </View>
  );
};

export default Page;
