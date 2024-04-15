import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "@/providers/CartProvider";
import { FlashList } from "@shopify/flash-list";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

export default function CartScreen() {
  const { items, total, checkout } = useCart();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
      <Text style={{ textAlign: "right", fontSize: 20, marginVertical: 10 }}>
        Total: ${total.toFixed(2)}
      </Text>
      <Button text="Checkout" onPress={checkout} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
