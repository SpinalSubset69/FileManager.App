import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient( { event, title }) {
  
  return (
    <TouchableOpacity onPress={ event }
     style={styles.container}>
      <LinearGradient 
        // Button Linear Gradient
        colors={["#35858B", "#5EA2A7"]}
        start={{ x:0, y:0 }}
        end={{ x:1, y:1 }}
        style={styles.button}
       
      >
        <Text style={styles.text}>{ title }</Text>
      </LinearGradient>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ 
  text: {
      fontSize: 14,
      color: '#fff',      
      fontWeight: 'bold'
  },
  button: {
      height: 50,
      width:'80%',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center'
  },
  container: {      
      width: 200,
      alignItems: 'center',
      marginTop: 20
  }
});
