import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../componets/NavOptions";

const Home = () => {
  return (
    <SafeAreaView style={[styles.droidSafeArea, tw`bg-white h-full`]}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default Home;
