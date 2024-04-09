import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";
import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from "@gorhom/bottom-sheet";

interface Props {
  listings: any[];
  category: string;
  refreshListings: number;
}

const Listings = ({ listings: items, category, refreshListings }: Props) => {
  const listRef = useRef<BottomSheetFlatListMethods>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (refreshListings) {
      listRef.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [refreshListings]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <Animated.View
            style={styles.listing}
            entering={FadeInRight}
            exiting={FadeOutLeft}
          >
            <Image source={{ uri: item.medium_url }} style={styles.image} />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 30,
                right: 30,
              }}
            >
              <Ionicons name="heart" size={24} color={Colors.grey} />
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontFamily: "jakarta-sb", fontSize: 16 }}>
                {item.name}
              </Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Ionicons name="star" size={16} color={Colors.primary} />
                <Text style={{ fontFamily: "jakarta-sb" }}>
                  {item.review_scores_rating / 20}
                </Text>
              </View>
            </View>
            <Text style={{ fontFamily: "jakarta" }}>{item.room_type}</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={{ fontFamily: "jakarta-sb" }}>${item.price}</Text>
              <Text style={{ fontFamily: "jakarta" }}>night</Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <BottomSheetFlatList
      renderItem={renderRow}
      data={loading ? [] : items}
      ref={listRef}
      ListHeaderComponent={
        <Text style={styles.info}>{items.length} homes</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 8,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    // marginBottom: 8,
    borderRadius: 8,
  },
  info: {
    fontFamily: "jakarta-sb",
    textAlign: "center",
    fontSize: 16,
    // padding: 20,
    marginTop: 4,
    // backgroundColor: Colors.primary,
  },
});

export default Listings;
