import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/styles";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { places } from "@/assets/data/places";
import { ScrollView } from "react-native-gesture-handler";

// @ts-ignore
import DatePicker from "react-native-modern-datepicker";

const guestsGroups = [
  {
    name: "Adults",
    text: "Ages 13 or above",
    count: 0,
  },
  {
    name: "Children",
    text: "Ages 2-12",
    count: 0,
  },
  {
    name: "Infants",
    text: "Under 2",
    count: 0,
  },
  {
    name: "Pets",
    text: "Pets allowed",
    count: 0,
  },
];

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Page = () => {
  const [groups, setGroups] = useState(guestsGroups);
  const router = useRouter();
  const today = new Date().toISOString().substring(0, 10);
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);

  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
    setGroups(guestsGroups);
  };
  return (
    <BlurView intensity={90} style={styles.container} tint="light">
      {/* Where */}
      <View style={styles.card}>
        {openCard != 0 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewDate}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 0 && <Text style={styles.cardHeader}>Where to?</Text>}
        {openCard == 0 && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.cardBody}
          >
            <View style={styles.searchSection}>
              <Ionicons
                style={styles.searchIcon}
                name="search"
                size={20}
                color="#000"
              />
              <TextInput
                style={styles.inputField}
                placeholder="Search destinations"
                placeholderTextColor={Colors.grey}
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.placesContainer}
            >
              {places.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedPlace(index)}
                  key={index}
                >
                  <Image
                    source={item.img}
                    style={
                      selectedPlace == index
                        ? styles.placeSelected
                        : styles.place
                    }
                  />
                  <Text style={{ fontFamily: "jakarta", paddingTop: 6 }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        )}
      </View>
      {/* When */}
      <View style={styles.card}>
        {openCard != 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewDate}>Any week</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard == 1 && (
          <Text style={styles.cardHeader}>When's your trip?</Text>
        )}

        {openCard === 1 && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.cardBody}
          >
            <DatePicker
              options={{
                defaultFont: "jakarta",
                headerFont: "jakarta-sb",
                mainColor: Colors.primary,
                borderColor: "transparent",
              }}
              current={today}
              selected={today}
              mode={"calendar"}
            />
          </Animated.View>
        )}
      </View>
      {/* Who */}
      <View style={styles.card}>
        {openCard != 2 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewDate}>Add guests</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard == 2 && <Text style={styles.cardHeader}>Who's coming?</Text>}

        {openCard === 2 && (
          <Animated.View style={styles.cardBody}>
            {groups.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.guestItem,
                  index + 1 < guestsGroups.length ? styles.itemBorder : null,
                ]}
              >
                <View>
                  <Text style={{ fontFamily: "jakarta-sb", fontSize: 14 }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "jakarta",
                      fontSize: 14,
                      color: Colors.grey,
                    }}
                  >
                    {item.text}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      const newGroups = [...groups];
                      newGroups[index].count =
                        newGroups[index].count > 0
                          ? newGroups[index].count - 1
                          : 0;

                      setGroups(newGroups);
                    }}
                  >
                    <Ionicons
                      name="remove-circle-outline"
                      size={26}
                      color={groups[index].count > 0 ? Colors.grey : "#cdcdcd"}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "jakarta",
                      fontSize: 16,
                      minWidth: 18,
                      textAlign: "center",
                    }}
                  >
                    {item.count}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      const newGroups = [...groups];
                      newGroups[index].count++;
                      setGroups(newGroups);
                    }}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={26}
                      color={Colors.grey}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </Animated.View>
        )}
      </View>
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onClearAll}>
            <View style={{ paddingBottom: 1 }}>
              <Text style={{ fontFamily: "jakarta-sb", fontSize: 16 }}>
                Clear All
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: Colors.dark,
                borderBottomWidth: 1,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingHorizontal: 20 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color="white"
              style={(defaultStyles.btnIcon, { paddingRight: 10 })}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  cardHeader: {
    fontFamily: "jakarta-b",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  searchSection: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    marginBottom: 16,
  },
  searchIcon: {
    padding: 10,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  placesContainer: {
    flexDirection: "row",
    gap: 25,
  },
  place: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  placeSelected: {
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  previewText: {
    fontFamily: "jakarta-sb",
    fontSize: 16,
    color: Colors.grey,
  },
  previewDate: {
    fontFamily: "jakarta-b",
    fontSize: 16,
    color: Colors.dark,
  },
  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
});

export default Page;
