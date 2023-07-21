import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const handleName = () => {
    setName("Mutesi");
  };
  return (
    <View className="h-screen w-full  space-y-4 flex justify-center  items-center">
      <Text className="p-3 bg-yellow-500">Hello, my name is {name}</Text>
      <View className="p-4 bg-green-500">
        <Button title="change Name" onPress={handleName} />
      </View>
      <View className="space-y-4">
        <Text>Enter your name:</Text>
        <TextInput className="p-4 border" placeholder="eg John" onChangeText={(value)=>setName(value)} multiline/>
        <Text>Name is {name}</Text>
      </View>
    </View>
  );
}
