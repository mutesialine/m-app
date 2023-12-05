import { View, Text, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import ProductList from "./components/ProductList";
import AppBarHeader from "./components/AppBarHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FooterNavigation from "./components/FooterNavigation";

//test
export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaProvider className="flex-1  justify-center items-center bg-gray-200 dark:bg-black py-10">
      <AppBarHeader />
      <View className="pt-6">
        <View className="flex-row items-center justify-between w-full">
          <Text className="text-2xl dark:text-white p-4 font-semibold">
            New collection
          </Text>
        </View>
        <ProductList />
      </View>
      <FooterNavigation />
    </SafeAreaProvider>
  );
}
