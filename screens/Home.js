import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../componets/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";

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
        <GooglePlacesAutocomplete
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          placeholder="Search"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          query={{ key: GOOGLE_API_KEY, language: "en" }}
          onPress={(data, details = null) => {
            console.log(data)
            console.log(details)
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
