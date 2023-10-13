import * as React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";

export default function Productcard({
  image,
  category,
  price,
  title,
  description,
  rating,
}) {
  const { colorScheme } = useColorScheme();
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  return (
    <View className="w-full  bg-white dark:bg-gray-50/10 p-5 my-5 rounded-3xl">
      <View className=" bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5 ">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <Text className="text-2xl font-extrabold dark:text-white">{price}</Text>
        <Text
          numberOfLines={3}
          className="text-sm text-black/60 dark:text-white/70"
        >
          {description}
        </Text>

        <View className="flex-row items-center justify-between py-4">
          <Text className="dark:text-white"> ⭐ ⭐ ⭐ ⭐ {rating}</Text>
          <Text className="text-base font-semibold  dark:text-white">
            {count === 0 ? "no cart yet" : `${count} cart added`}
          </Text>
        </View>
        <TouchableOpacity
          className="flex-row justify-center bg-black dark:bg-white rounded-xl py-3  mt-4"
          onPress={onPress}
        >
          <Text className="text-white dark:text-black font-bold hover:opacity-80">
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
