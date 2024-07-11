import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors"

function GameStartScreen(props) {
  const [enteredNumber, setEnteredNumber] =  useState("");
  
  function handleInputChange(enteredVal){
     setEnteredNumber(enteredVal);
  }

  function handleResetVal(){
    setEnteredNumber('');
  }

  function checkInput(){
    const inputNumber = parseInt(enteredNumber);
    if(isNaN(inputNumber)|| inputNumber<=0 || inputNumber>99){
      Alert.alert('Invalid Number!',
        'Number has to be a number between 1 and 99.',
         [{text:"Okay",style:'destructive',onPress:handleResetVal}]
      )
      return;
    }
    props.getUserNumber(inputNumber);
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numericField}
        maxLength={2}
        autoCorrect={false}
        keyboardType="number-pad"
        autoCapitalize="none"
        value =  {enteredNumber}
        onChangeText={handleInputChange}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonEncloser}>
          <PrimaryButton action={handleResetVal}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonEncloser}>
          <PrimaryButton action={checkInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numericField: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  
  buttonEncloser: {
    flex :1,
  },
  buttonContainer:{
    flexDirection: "row",
  }
});

export default GameStartScreen;
