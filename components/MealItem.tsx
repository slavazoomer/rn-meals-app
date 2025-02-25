import Meal from "@/models/meal"
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native"

const MealItem = ({ item }: { item: Meal }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}</Text>
            <Text style={styles.detailItem}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 4,
  },
  detailItem: {
    fontSize: 12,
  },
})
