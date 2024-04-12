import { Text, View } from "react-native";
import orders from "assets/data/orders";
import { FlashList } from "@shopify/flash-list";
import OrderItemListItem from "components/OrderListItem";

export default function OrdersScreen() {
  return (
    <FlashList
      data={orders}
      renderItem={({ item }) => <OrderItemListItem order={item} />}
      contentContainerStyle={{ padding: 5 }}
      estimatedItemSize={100}
    />
  );
}
