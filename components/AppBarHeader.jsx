import * as React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import SwitchTheme from "./SwitchTheme";

export default function AppBarHeader() {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <View className="w-full pt-12">
      <Appbar.Header className="flex justify-end bg-red-gray-400 w-full dark:bg-black ">
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
       <SwitchTheme/>
      </Appbar.Header>
    </View>
  );
}
