import { useProductList } from "@/src/api/products";
import ProductListItem from "@/src/components/ProductListItem";
import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator, Text, View } from "react-native";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed {error.message}</Text>;
  }
  return (
    <FlashList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      estimatedItemSize={200}
      numColumns={2}
    />
  );
}
