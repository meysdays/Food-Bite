import { Stack } from "expo-router";
import "../global.css";
import {
  useFonts,
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from "@expo-google-fonts/syne";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppContextProvider } from "../context";
import CustomizeModal from "../components/ui/modal";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    regular: Syne_400Regular,
    medium: Syne_500Medium,
    semiBold: Syne_600SemiBold,
    bold: Syne_700Bold,
    extraBold: Syne_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="auth" />
            <Stack.Screen name="order" />
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
          <CustomizeModal/>
        </GestureHandlerRootView>
      </AppContextProvider>
    </SafeAreaProvider>
  );
}
