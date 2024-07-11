import{View, Pressable,Text,StyleSheet} from "react-native";
import Colors from "../constants/colors"

function PrimaryButton({children,action}){
  return(
    <View style={styles.buttonContainer}>
      <Pressable 
        style={({pressed})=> pressed ?[styles.buttonInsider,styles.pressed] :styles.buttonInsider} 
        android_ripple={{ color: Colors.primary600 }}
        onPress={action}  
      >
      <Text style={styles.buttonText}>
        {children}
      </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
    },
    buttonInsider:{
      backgroundColor: Colors.primary500,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation : 2
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
    },
    pressed : {
        opacity : 0.75,
    }
});

export default PrimaryButton;