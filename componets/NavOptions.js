import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "http://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "456",
    title: "Get a food",
    image: "http://links.papareact.com/28w",
    screen: "EaatsScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={tw`p-1`}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: { width: 120, height: 120, resizeMode: "contain" },
});
