import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../CustomButton";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Trigonometria({ changeCalculator }) {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleAddNumber = (number) => {
    if (currentNumber === "0") {
      setCurrentNumber(number);
    } else {
      setCurrentNumber(currentNumber + number);
    }
  };

  const handleFunction = (type) => {
    if (type === "AC") {
      setCurrentNumber("0");
      setPreviousNumber(null);
      setOperation(null);
    }
    if (type === "+/-") {
      setCurrentNumber(currentNumber * -1);
    }
    if (type === "%") {
      setCurrentNumber(currentNumber / 100);
    }
  };

  const handleOperation = (type) => {
    if (previousNumber !== null) {
      let result = operate();
      setCurrentNumber(result);
    } else {
      setPreviousNumber(currentNumber);
    }
    setCurrentNumber("0");
    setOperation(type);
  };

  const operate = () => {
    let result = 0;
    if (operation === "sen") {
      result = Math.sin(currentNumber);
    }
    if (operation === "cos") {
      result = Math.cos(currentNumber);
    }
    if (operation === "tan") {
      result = Math.tan(currentNumber);
    }
    return result.toFixed(6);
  };

  const handleEqual = () => {
    let result = operate();
    if (result) {
      setCurrentNumber(result);
      setPreviousNumber(null);
      setOperation(null);
    }
    console.log(operation);
  };

  const handleBackspace = () => {
    let number = currentNumber.toString();
    let newNumber = number.substr(0, number.length - 1);
    if (newNumber === "") {
      setCurrentNumber("0");
    } else {
      setCurrentNumber(newNumber);
    }
  };

  const handleDot = () => {
    if (currentNumber.indexOf(".") === -1) {
      setCurrentNumber(currentNumber + ".");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "pink", fontSize: 20, fontWeight: 700, paddingTop: 50 }}>TRIGONOMETRIA</Text>
      <View style={styles.screen}>
        <Text style={{ fontSize: 40, color: "white" }}>
          {operation} {currentNumber}
        </Text>
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton
          type="change"
          valor="base"
          handler={() => changeCalculator("Basica")}
        />
        <CustomButton
          type="change"
          valor="con"
          handler={() => changeCalculator("Aritmetica")}
        />
        <CustomButton
          type="change"
          valor="trig"
          handler={() => changeCalculator("Trigonometria")}
          selected={true}
        />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="function" valor="AC" handler={handleFunction} />
        <CustomButton type="function" valor="+/-" handler={handleFunction} />
        <CustomButton type="function" valor={<Icon name = "percentage" size={25} />} handler={handleFunction} />
        <CustomButton type="function" valor={<Icon name = "backspace" size={25} />} handler={handleBackspace} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="7" handler={handleAddNumber} />
        <CustomButton type="number" valor="8" handler={handleAddNumber} />
        <CustomButton type="number" valor="9" handler={handleAddNumber} />
        <CustomButton type="operation" valor="sen" handler={handleOperation} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="4" handler={handleAddNumber} />
        <CustomButton type="number" valor="5" handler={handleAddNumber} />
        <CustomButton type="number" valor="6" handler={handleAddNumber} />
        <CustomButton type="operation" valor="cos" handler={handleOperation} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="3" handler={handleAddNumber} />
        <CustomButton type="number" valor="2" handler={handleAddNumber} />
        <CustomButton type="number" valor="1" handler={handleAddNumber} />
        <CustomButton type="operation" valor="tan" handler={handleOperation} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="0" handler={handleAddNumber} />
        <CustomButton type="number" valor="." handler={handleDot} />
        <CustomButton type="operation" valor={<Icon name = "equals" size={25} />} handler={handleEqual} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "black",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    width: "100%",
    height: "25%",
    padding: 20,
    margin: 5,
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
   
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
});