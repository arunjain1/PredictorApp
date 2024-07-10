import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.appContainer}>
        <LinearGradient
          colors={["#4e0329", "#ddb52f"]}
          style={styles.appContainer}
        >
          <ImageBackground
            source={require("./assets/Images/background.png")}
            resizeMode="cover"
            style={styles.appContainer}
            imageStyle={styles.backImage}
          >
            <GameStartScreen />
          </ImageBackground>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
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
