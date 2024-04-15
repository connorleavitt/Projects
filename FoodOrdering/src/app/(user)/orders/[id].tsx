import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import OrderListItem from "@/components/OrderListItem";
import OrderItemListItem from "@/components/OrderItemListItem";
import { FlashList } from "@shopify/flash-list";
import { useOrderDetails } from "@/api/orders";

const OrderDetailScreen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === "string" ? idString : idString[0]);
  // const order = orders.find((o) => o.id.toString() === id);
  const { data: order, isLoading, error } = useOrderDetails(id);

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
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${order.id}` }} />
      {/* <OrderListItem order={order} /> */}
      <FlashList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        estimatedItemSize={100}
        ListHeaderComponent={
          <>
            <OrderListItem order={order} />
            <Text style={{ fontWeight: "bold" }}>Order Items</Text>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
});

export default OrderDetailScreen;
