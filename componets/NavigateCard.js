import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "twrnc";

export default function NavigateCard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>hello</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({container: tw`bg-white flex-1`, text: tw`text-center p-5 text-xl`})