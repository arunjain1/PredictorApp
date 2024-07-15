import { View, Text, StyleSheet, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

function RandomNumberGenerator(min,max,exclude){
   const rndNumber = Math.floor(Math.random()*(max-min))+min;
   if(exclude !== undefined && exclude === rndNumber){
    return RandomNumberGenerator(min,max,exclude);
   }
   return rndNumber;
}
let min = 1;
let max = 100;

function GameScreen(props) {
  
  const initialGuess = RandomNumberGenerator(min,max,props.userNumber);
  const [currentGuess,setCurrentGuess] = useState(initialGuess);

  useEffect(()=>{
    console.log(props.userNumber,currentGuess);
    if(currentGuess==props.userNumber){
      props.GameOver();
      console.log("Yo");
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
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
        <View>
          <PrimaryButton action={nextGuessHandler.bind(this,"lower")}>
             Lower
          </PrimaryButton>
          <PrimaryButton action={nextGuessHandler.bind(this,"higher")}>
             Higher
          </PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
});