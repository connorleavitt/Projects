import { ScrollView, View, FlatList } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { FlashList } from "@shopify/flash-list";

export default function MenuScreen() {
  return (
    <FlashList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      estimatedItemSize={200}
      numColumns={2}
    />
  );
}
