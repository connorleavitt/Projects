import { View, ActivityIndicator } from "react-native";
import ProductListItem from "@/src/components/ProductListItem";
import { FlashList } from "@shopify/flash-list";
import { useProductList } from "@/src/api/products";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <View>Failed {error.message}</View>;
  }

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data, error } = await supabase.from("products").select("*");
  //     console.log(data, error);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <FlashList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      estimatedItemSize={200}
      numColumns={2}
    />
  );
}
