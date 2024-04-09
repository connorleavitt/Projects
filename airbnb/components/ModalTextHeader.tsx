import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";

const ModalTextHeader = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <TouchableOpacity onPress={() => setActive(0)}>
        <View style={{ paddingBottom: active === 0 ? 3 : 0 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "jakarta-sb",
              color: active === 0 ? "#000" : Colors.grey,
            }}
          >
            Stays
          </Text>
        </View>
        {active === 0 && (
          <View
            style={{
              borderBottomColor: "#000",
              borderBottomWidth: 1,
            }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <View style={{ paddingBottom: active === 1 ? 3 : 0 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: "jakarta-sb",
              color: active === 1 ? "#000" : Colors.grey,
            }}
          >
            Experiences
          </Text>
        </View>
        {active === 1 && (
          <View
            style={{
              borderBottomColor: "#000",
              borderBottomWidth: 1,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ModalTextHeader;
