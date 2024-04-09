import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  useWarmUpBrowser();

  return (
    <View style={defaultStyles.loginContainer}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={defaultStyles.inputField}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={defaultStyles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={defaultStyles.seperator}>OR</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
      <View style={{ gap: 20 }}>
        <TouchableOpacity style={defaultStyles.btnOutline}>
          <Ionicons
            name="call-outline"
            size={22}
            style={defaultStyles.btnIcon}
          />
          <Text style={defaultStyles.btnOutlineText}>Continue With Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnOutline}>
          <Ionicons name="logo-apple" size={22} style={defaultStyles.btnIcon} />
          <Text style={defaultStyles.btnOutlineText}>Continue With Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnOutline}>
          <Ionicons
            name="logo-google"
            size={22}
            style={defaultStyles.btnIcon}
          />
          <Text style={defaultStyles.btnOutlineText}>Continue With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnOutline}>
          <Ionicons
            name="logo-facebook"
            size={22}
            style={defaultStyles.btnIcon}
          />
          <Text style={defaultStyles.btnOutlineText}>
            Continue With Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;
