import { FlatList, View } from "react-native";
import React from "react";
import CategoryItem from "./category-item";
import { Category as CategoryType } from "@/src/types/types";
import { CategoryData } from "@/data";

interface CategoryProps {
  selectedCategory?: CategoryType | null;
}

const Category = ({ selectedCategory }: CategoryProps) => {
  return (
    <View>
      <FlatList
        data={CategoryData || []}
        renderItem={({ item }) => (
          <CategoryItem
            name={item.name}
            imageUrl={item.img}
            id={item.name}
            selected={item.name === selectedCategory?.idCategory}
          />
        )}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 2,
        }}
      />
    </View>
  );
};

export default Category;
