import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: any;
  category: string;
}

const ListingBottomSheet = ({ listings, category }: Props) => {
  const [refreshListings, setRefreshListings] = useState(0);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefreshListings(refreshListings + 1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
      enablePanDownToClose={false}
      style={styles.sheetContainer}
    >
      <Listings
        listings={listings}
        category={category}
        refreshListings={refreshListings}
      />
      <View style={styles.absoluteBtn}>
        <TouchableOpacity style={styles.mapBtn} onPress={showMap}>
          <Ionicons name="map" size={20} color={"#fff"} />
          <Text style={{ color: "#fff" }}>Map</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    width: "100%",
  },
  mapBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark,
    borderRadius: 20,
    gap: 8,
    padding: 12,
    fontFamily: "jakarta-sb",
  },
  sheetContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ListingBottomSheet;
