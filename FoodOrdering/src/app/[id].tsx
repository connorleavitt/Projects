import { useLocalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";

const ProductDetialsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Product Details for id: {id}</Text>
    </View>
  );
};

export default ProductDetialsScreen;
