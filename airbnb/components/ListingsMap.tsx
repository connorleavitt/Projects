import { View, Text, StyleSheet } from "react-native";
import React, { memo } from "react";
import { Marker } from "react-native-maps";
import { defaultStyles } from "@/constants/styles";
import { useRouter } from "expo-router";
import MapView from "react-native-map-clustering";
import Colors from "@/constants/Colors";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 13.33,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMap = memo(({ listings }: Props) => {
  const router = useRouter();
  const onMarkerPress = (id: string) => {
    router.push(`/listing/${id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, properties, onPress } = cluster;
    const points = properties.point_count;
    const { coordinates } = geometry;
    const [longitude, latitude] = coordinates;
    return (
      <Marker
        key={`cluster-${id}`}
        coordinate={{ latitude, longitude }}
        onPress={onPress}
      >
        <View style={styles.clusterContainer}>
          <Text style={styles.clusterText}>{points}</Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        showsUserLocation
        showsMyLocationButton
        provider="google"
        initialRegion={INITIAL_REGION}
        animationEnabled={false}
        renderCluster={renderCluster}
      >
        {listings.features.map((listing: any) => {
          const { geometry, properties } = listing;
          const { coordinates } = geometry;
          const { name, id } = properties;
          const [longitude, latitude] = coordinates;
          return (
            <Marker
              key={id}
              onPress={() => onMarkerPress(id)}
              coordinate={{ latitude, longitude }}
            >
              <View style={styles.mapOverlay}>
                <Text style={styles.mapOverlayText}>${properties.price}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mapOverlay: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 20,
    opacity: 0.8,
  },
  mapOverlayText: {
    fontFamily: "jakarta-sb",
    color: "white",
  },
  clusterContainer: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  clusterText: {
    color: "white",
    fontFamily: "jakarta-sb",
  },
});
export default ListingsMap;
