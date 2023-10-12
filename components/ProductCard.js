import * as React from "react";
import { View, Text } from "react-native";
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
    <View className="w-full bg-white dark:bg-gray-500 p-5 my-5 rounded-3xl">
      <Text className="text-2xl dark:text-white">{title}</Text>
      <Text>{price}</Text>
      <Text>{description}</Text>
      <Text>{category}</Text>
    </View>
  );
}
