import { FlatList } from "react-native"

import CategoryGridTile from "@/components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"

const CategoriesScreen = () => {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryGridTile title={item.title} color={item.color} />
        )}
      />
    </>
  )
}

export default CategoriesScreen
