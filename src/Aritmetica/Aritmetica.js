import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../CustomButton";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Aritmetica({ changeCalculator }) {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [binaryNumber, setBinaryNumber] = useState("0");
  const [octalNumber, setOctalNumber] = useState("0");
  const [hexadecimalNumber, setHexadecimalNumber] = useState("0");
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
    }
    if (type === "+/-") {
      setCurrentNumber(currentNumber * -1);
    }
    if (type === "%") {
      setCurrentNumber(currentNumber / 100);
    }
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

  const decimalToBinary = () => {
    setBinaryNumber(parseInt(currentNumber, 10).toString(2));
  };

  const decimalToOctal = () => {
    setOctalNumber(parseInt(currentNumber, 10).toString(8));
  };

  const decimalToHexadecimal = () => {
    setHexadecimalNumber(parseInt(currentNumber, 10).toString(16));
  };

  useEffect(() => {
    decimalToBinary();
    decimalToOctal();
    decimalToHexadecimal();
  }, [currentNumber]);

  return (
    <View style={styles.container}>
      <Text style={{ color: "pink", fontSize: 20, fontWeight: 700, paddingTop: 50 }}>ARITMETICA</Text>
      <View style={styles.screen}>
        <View style={styles.inputNumber}>
          <Text style={{ fontSize: 25, color: "purple" }}>Octal</Text>
          <Text style={{ fontSize: 25, color: "purple" }}>{octalNumber}</Text>
        </View>
        <View style={styles.inputNumber}>
          <Text style={{ fontSize: 25, color: "purple" }}>Hexadecimal</Text>
          <Text style={{ fontSize: 25, color: "purple" }}>
            {hexadecimalNumber}
          </Text>
        </View>
        <View style={styles.inputNumber}>
          <Text style={{ fontSize: 25, color: "purple" }}>Binario</Text>
          <Text style={{ fontSize: 25, color: "purple" }}>{binaryNumber}</Text>
        </View>
  
        <View style={styles.inputNumber}>
          <Text style={{ fontSize: 25, color: "purple" }}>Decimal</Text>
          <Text style={{ fontSize: 25, color: "purple" }}>{currentNumber}</Text>
        </View>
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
          selected={true}
        />
        <CustomButton
          type="change"
          valor="trig"
          handler={() => changeCalculator("Trigonometria")}
        />
      </View>

      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="7" handler={handleAddNumber} />
        <CustomButton type="number" valor="8" handler={handleAddNumber} />
        <CustomButton type="number" valor="9" handler={handleAddNumber} />
        <CustomButton type="function" valor={<Icon name = "backspace" size={25} />}  
        handler={handleBackspace} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="4" handler={handleAddNumber} />
        <CustomButton type="number" valor="5" handler={handleAddNumber} />
        <CustomButton type="number" valor="6" handler={handleAddNumber} />
        <CustomButton type="function" valor="AC" handler={handleFunction} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="3" handler={handleAddNumber} />
        <CustomButton type="number" valor="2" handler={handleAddNumber} />
        <CustomButton type="number" valor="1" handler={handleAddNumber} />
        <CustomButton type="function" valor="+/-" handler={handleFunction} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="0" handler={handleAddNumber} />
        <CustomButton type="number" valor="." handler={handleDot} />
        <CustomButton type="function" valor={<Icon name = "percentage" size={25} />} handler={handleFunction} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "black",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    width: "100%",
    height: "30%",
    padding: 20,
    margin: 5,
    marginBottom: -10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  inputNumber: {
    flexDirection: "row",
    width: "100%",
    height: "25%",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    color: "white",
    fontSize: 20,
    textAlign: "right",
  },
});