import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import MapComponent from "../componets/MapComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../componets/NavigateCard";
import RideOptionsCard from "../componets/RideOptionsCard";

export default function Map() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.droidSafeArea}>
      <View style={styles.mapScreen}>
        <MapComponent />
      </View>
      <View style={styles.mapScreen}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
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
