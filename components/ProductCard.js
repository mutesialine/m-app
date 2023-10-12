import * as React from "react";
import { View, Text, Image } from "react-native";
import { useColorScheme } from "nativewind";

export default function Productcard({
  image,
  category,
  price,
  title,
  description,
}) {
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full  bg-white dark:bg-gray-50/10 p-5 my-5 rounded-3xl">
      <View className=" bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-4">
        <Text className="text-2xl dark:text-white">{category}</Text>
        <Text>{price}</Text>
        <Text>{description}</Text>
        <Text>{category}</Text>
      </View>
    </View>
  );
}
