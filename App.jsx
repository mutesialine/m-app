import { View, SafeAreaView, Text, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import ProductList from "./components/ProductList";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1 px-6 justify-center items-center bg-gray-200 dark:bg-black py-10">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-2xl dark:text-white p-4 font-semibold">
          New collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductList />
      <StatusBar style={colorScheme === "dark" ? "light" : "green"} />
    </SafeAreaView>
  );
}
