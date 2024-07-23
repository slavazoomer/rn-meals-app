import MealItem from "@/components/MealItem"
import { MEALS } from "@/data/dummy-data"
import { useLocalSearchParams } from "expo-router"
import { FlatList, StyleSheet, View, Text } from "react-native"

const CategoryOverviewScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(id))
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  )
}

export default CategoryOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
