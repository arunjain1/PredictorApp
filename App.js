import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors.js";

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(false);
  function getUserNumber(val){
    setUserNumber(val);
  }
  function GameOver(){
    setGameIsOver(true);
  }

  let screen = <GameStartScreen getUserNumber = {getUserNumber} />

  if(userNumber){
    screen = (<GameScreen userNumber={userNumber} GameOver={GameOver}/>)
  }

  if(userNumber && gameIsOver){
    screen = <GameOverScreen/>;
  }
  
  return (
        <LinearGradient
          colors={[Colors.primary700,Colors.accent500]}
          style={styles.appContainer}
        > 
          <ImageBackground
            source={require("./assets/Images/background.png")}
            resizeMode="cover"
            style={[styles.appContainer,styles.imageCont]}
            imageStyle={styles.backImage}
          >
            <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
           
          </ImageBackground>
        </LinearGradient>
  
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backImage: {
    opacity: 0.15,
  },
});
