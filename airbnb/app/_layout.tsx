import ModalTextHeader from "@/components/ModalTextHeader";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    jakarta: require("../assets/fonts/static/PlusJakartaSans-Regular.ttf"),
    "jakarta-sb": require("../assets/fonts/static/PlusJakartaSans-SemiBold.ttf"),
    "jakarta-b": require("../assets/fonts/static/PlusJakartaSans-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ClerkProvider>
    <RootLayoutNav />
    // </ClerkProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modals)/login"
          options={{
            title: "Log in or sign up",
            headerTitleStyle: {
              fontFamily: "jakarta-sb",
            },
            presentation: "modal",
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="close-outline" size={28} />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="(modals)/booking"
          options={{
            presentation: "transparentModal",
            headerTransparent: true,
            headerTitle: () => <ModalTextHeader />,
            animation: "fade",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{
                  padding: 8,
                  backgroundColor: "#fff",
                  borderColor: Colors.grey,
                  borderWidth: 1,

                  borderRadius: 20,
                }}
              >
                <Ionicons name="close-outline" size={20} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="listing/[id]"
          options={{
            headerTitle: "",
            headerTransparent: true,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
