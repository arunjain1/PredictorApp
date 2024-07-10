import{View, Pressable,Text,StyleSheet} from "react-native";

function PrimaryButton({children}){
  return(
    <View style={styles.buttonContainer}>
      <Pressable 
        style={({pressed})=> pressed ?[styles.buttonInsider,styles.pressed] :styles.buttonInsider} 
        android_ripple={{ color: '#640233' }}
        onPress={"hello"}  
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
      backgroundColor: '#9f4270',
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