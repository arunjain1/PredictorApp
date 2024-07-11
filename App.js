import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors.js";

export default function App() {
  const [userNumber,setUserNumber] = useState();
  
  function getUserNumber(val){
    setUserNumber(val);
  }

  let screen = <GameStartScreen getUserNumber = {getUserNumber} />

  if(userNumber){
    screen = <GameScreen/>
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
