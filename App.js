import { useState } from "react";
import { Button, FlatList, ScrollView, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState();
  const[people, setPeople]=useState([
   {name:"Clever",key:'1'} ,
   {name:"Yves",key:'2'} ,
   {name:"John",key:'3'} ,
   {name:"Beatrice",key:'4'} ,
   {name:"Eric",key:'5'} ,
   {name:"Josh",key:'6'} ,
   {name:"Aldo",key:'7'} ,
   {name:"Mudosa",key:'8'} ,
  ])
  const handleName = () => {
    setName("Mutesi");
  };
  return (
    
    <View className="h-screen w-full  space-y-4  items-center">
      <ScrollView>
      <Text className="p-3 bg-yellow-500">Hello, my name is {name}</Text>
      <View className="p-4 bg-green-500">
        <Button title="change Name" onPress={handleName} />
      </View>
      <View className="space-y-4 pt-10">
        <Text>Enter your name:</Text>
        <TextInput className="p-4 border" placeholder="eg John" onChangeText={(value)=>setName(value)} multiline/>
        <Text>Name is {name}</Text>
      </View>
      <View className="space-y-4 pt-5r">
        {people.map((element)=>(<Text className="p-4 bg-emerald-600" key={element.key}>{element.name}</Text> 
        ))}
      </View>
      </ScrollView> 
       <FlatList
      data={people}
      keyExtractor={element.id}
      renderItem={(element)=>(<Text className="p-4 bg-emerald-600" key={element.key}>{element.name}</Text> 
      )}
      />
    </View>
  );
}
