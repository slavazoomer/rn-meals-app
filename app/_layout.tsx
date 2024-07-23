import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"

import { StatusBar } from "expo-status-bar"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: "#351417" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#3f2f25" },
          title:
            route.name === "[category]"
              ? (route.params as { id: string })?.id
              : "Category",
        })}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="[category]" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  )
}
