import { StyleSheet, Image, Text, View } from "react-native";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg";

type ProductListItemProps = { product: Product };

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
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
