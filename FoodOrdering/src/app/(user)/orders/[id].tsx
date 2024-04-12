import { View, Text, StyleSheet, FlatList } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "assets/data/orders";
import OrderListItem from "@/components/OrderListItem";
import OrderItemListItem from "@/components/OrderItemListItem";
import { FlashList } from "@shopify/flash-list";

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text>Order not found!</Text>;
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
