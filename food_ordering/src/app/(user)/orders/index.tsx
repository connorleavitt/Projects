import { ActivityIndicator, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import OrderItemListItem from "components/OrderListItem";
import { useMyOrderList } from "@/api/orders";

export default function OrdersScreen() {
  const { data: orders, isLoading, error } = useMyOrderList();
  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Failed {error.message}</Text>
      </View>
    );
  }
  return (
    <FlashList
      data={orders}
      renderItem={({ item }) => <OrderItemListItem order={item} />}
      contentContainerStyle={{ padding: 5 }}
      estimatedItemSize={100}
    />
  );
}
