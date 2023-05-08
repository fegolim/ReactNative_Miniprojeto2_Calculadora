import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Basica from "./src/Basica/Basica";
import Trigonometria from "./src/Trigonometria/Trigonometria";
import Aritmetica from "./src/Aritmetica/Aritmetica";

export default function App() {
  const [calculator, setCalculator] = useState("Basica");
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      {calculator === "Basica" ? (
        <Basica changeCalculator={setCalculator} />
      ) : calculator === "Trigonometria" ? (
        <Trigonometria changeCalculator={setCalculator} />
      ) : (
        <Aritmetica changeCalculator={setCalculator} />
      )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});