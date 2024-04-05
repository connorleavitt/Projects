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
import { useCart } from "@/src/providers/CartProvider";
import { FlashList } from "@shopify/flash-list";
import CartListItem from "../components/CartListItem";

export default function CartScreen() {
  const { items } = useCart();
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />

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
