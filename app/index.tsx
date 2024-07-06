import CategoriesScreen from "@/screens/CategoriesScreen"
import { StatusBar } from "expo-status-bar"
import { View, StyleSheet } from "react-native"

export default function Index() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#24180f",
//   },
// })
