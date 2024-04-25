import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { Tables } from "../types";
import { Link, useSegments, Href } from "expo-router";
import RemoteImage from "./RemoteImage";

export const defaultPizzaImage =
  "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg";

type ProductListItemProps = { product: Tables<"products"> };

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();

  return (
    <Link
      href={`/${segments[0]}/menu/${product.id}` as Href<StaticRange>}
      asChild
    >
      <Pressable style={styles.container}>
        <RemoteImage
          path={product.image}
          fallback={defaultPizzaImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
