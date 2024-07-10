import { StyleSheet, View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameStartScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numericField}
        maxLength={2}
        autoCorrect={false}
        keyboardType="number-pad"
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonEncloser}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonEncloser}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#72063c",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
