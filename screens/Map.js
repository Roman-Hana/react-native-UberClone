import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import MapComponent from "../componets/MapComponent";

export default function Map() {
  return (
    <View style={styles.droidSafeArea}>
      <View style={styles.mapScreen}>
        <MapComponent />
      </View>
      <View style={styles.mapScreen}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapScreen: tw`h-1/2`,
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
