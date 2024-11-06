import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMap";
import listingData from "@/assets/data/airbnb-listings.json";
import listingDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingBottomSheet from "@/components/ListingBottomSheet";

const Page = () => {
  //comment
  const [category, setCategory] = useState("Trending");

  const items = useMemo(() => listingData as any, []);

  const onDataChanged = (category: string) => {
    console.log("CHANGED", category);
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 70 }}>
      {/* <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/1234"}>Listings details page</Link> */}
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} category={category} /> */}

      <ListingsMap listings={listingDataGeo} />
      <ListingBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Page;
