import { Link } from "expo-router"
import { View, Pressable, Text, StyleSheet, Platform } from "react-native"

const CategoryGridTile = ({
  id,
  title,
  color,
}: {
  id: string
  title: string
  color: string
}) => {
  return (
    <View style={styles.gridItem}>
      <Link
        href={{ pathname: `/overview`, params: { id } }}
        asChild
        style={{ flex: 1 }}
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
})
