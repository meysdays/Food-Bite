import { FlatList, View } from "react-native";
import React from "react";
import { TopRestuarants } from "@/data";
import Card from "../../ui/card";

const Restuarants = () => {
  return (
    <View className="flex-1">
      {TopRestuarants.map((item) => (
        <Card
          key={item.foodName}
          img={item.img}
          imgLogo={item.imgLogo}
          foodName={item.foodName}
          restuarant={item.restuarant}
          time={item.time}
          distance={item.distanc}
        />
      ))}
    </View>
  );
};

export default Restuarants;
