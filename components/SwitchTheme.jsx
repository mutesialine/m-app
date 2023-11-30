import * as React from "react";
import { Switch } from "react-native-paper";
import { useColorScheme } from "nativewind";

export default function SwitchTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />;
}
