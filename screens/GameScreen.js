import { View, Text, StyleSheet, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import InstructionText from '../components/InstructionText';
import Card from '../components/Card';
import {Ionicons} from "@expo/vector-icons";


function RandomNumberGenerator(min,max,exclude){
  console.log(min,max,exclude)
   const rndNumber = Math.floor(Math.random()*(max-min))+min;
   console.log(rndNumber);
   if(exclude !== undefined && exclude === rndNumber){
    return RandomNumberGenerator(min,max,exclude);
   }
   return rndNumber;
}
let min = 1;
let max = 100;

function GameScreen(props) {
  
  const [currentGuess,setCurrentGuess] = useState(()=>RandomNumberGenerator(min,max,props.userNumber));

  useEffect(()=>{
    if(currentGuess==props.userNumber){
      props.GameOver();
    }
  },[currentGuess])
  
  function nextGuessHandler(direction) {
    if(
      (direction==="lower" && props.userNumber > currentGuess)||
      (direction==="higher" && props.userNumber < currentGuess)
    ){
      Alert.alert("Don't Lie!","You know that is wrong....",[{text:"Sorry!!",style:"cancel"}]);
      return;
    }
     if(direction === "lower"){
        max = currentGuess
     }
     else{
        min = currentGuess+1
     }
     const newNumber = RandomNumberGenerator(
       min,max,currentGuess
     );
     setCurrentGuess(newNumber);
  }
  
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
      <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        {/* + - */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton action={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton action={nextGuessHandler.bind(this, 'higher')}>
              <Ionicons name="add" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});