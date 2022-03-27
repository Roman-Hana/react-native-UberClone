import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectorOrigin } from "../slices/navSlice";

export default function MapComponent() {
  const origin = useSelector(selectorOrigin);
  return (
    <MapView
      style={styles.maoView}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({ maoView: tw`flex-1` });
