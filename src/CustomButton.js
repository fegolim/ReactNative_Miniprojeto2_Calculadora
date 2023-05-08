import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableHighlight,
  } from "react-native";
  import React from "react";
  
  const CustomButton = ({ type, valor, handler, selected }) => {
    return (
      <TouchableHighlight
        style={styles.button(type, valor, selected)}
        underlayColor={
          type === "number"
            ? "#444444"
            : type === "function"
            ? "#d9d7d7"
            : type === "change"
            ? "#9b617f"
            : "#ffad3b"
        }
        onPress={() => {
          handler(valor);
        }}
      >
        <Text style={styles.text(type, valor)}>{valor}</Text>
      </TouchableHighlight>
    );
  };
  
  export default CustomButton;
  
  const styles = StyleSheet.create({
    button: (type, valor, selected) => ({
      alignItems: valor === "0" ? "flex-start" : "center",
      justifyContent: "center",
      backgroundColor:
        type === "number"
          ? "#9AA8A8"
          : type === "operation"
          ? "#EFB9AD"
          : type === "change" && selected === true
          ? "#466A44"
          : type === "change"
          ? "#9b617f"
          : "#daf4c6",
      margin: 5,
      height: 80,
      width: valor === "0" ? "47%" : "20%",
      borderRadius: type === "change" ? 50 : 100,
      paddingLeft: valor === "0" ? 30 : 0,
    }),
    text: (type, valor) => ({
      color: type === "function" ? "#000" : "#fff",
      fontSize: valor === "÷" ? 40 : 20,
      fontWeight: 600,
    }),
  });