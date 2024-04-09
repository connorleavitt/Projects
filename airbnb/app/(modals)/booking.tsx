import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { defaultStyles } from "@/constants/styles";
import Animated, { SlideInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const router = useRouter();
  const onClearAll = () => {
    console.log("Clear All");
  };
  return (
    <BlurView intensity={90} style={styles.container} tint="light">
      <Text>Booking</Text>
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onClearAll}>
            <View style={{ paddingBottom: 1 }}>
              <Text style={{ fontFamily: "jakarta-sb", fontSize: 16 }}>
                Clear All
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: Colors.dark,
                borderBottomWidth: 1,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingHorizontal: 20 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color="white"
              style={(defaultStyles.btnIcon, { paddingRight: 10 })}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;
