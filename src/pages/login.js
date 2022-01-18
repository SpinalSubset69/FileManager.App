import React, { useState } from "react";
import ButtonGradient from "./../components/button";
import { TextInput, StyleSheet, Text, View, Dimensions } from "react-native";
import SvgTop from "./../svg/login-header";
import { apiCalls } from "../fetch";
import { showToast } from "../util/toast";
import { validate } from "../validates";
import { TouchableOpacity } from "react-native-gesture-handler";
import { localStorage } from "../util/asyncStorage";

const {width, height} = Dimensions.get('window');

export default function LoginPage({navigation: { navigate }}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAsync = async () => {    
    try{

      validate.Email(email);
      validate.Password(password);

      const data = await apiCalls.login({email, password});   

      if(data.statusCode === null){        
          showToast.error("Error", data.value.detail);
      }
  
      if(data.statusCode === 200){
          showToast.success('Login', 'Welcome back!!')

          //save token and ExpirationTime in MiliSeconds
          localStorage.setItem('token', data.value.data.token);
          localStorage.setItem('expiresIn', data.value.data.expiresIn);

          console.log( await localStorage.getItem('token'));
      }

    }catch(e){
      showToast.error('Error', e.message)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SvgTop />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titulo}>Hello</Text>

        <Text style={styles.subtitle}>Sign Into your account</Text>

        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="user@gmail.com"
        ></TextInput>

        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="password..."
        ></TextInput>

        <ButtonGradient event={loginAsync} title="Login"/>        

        <TouchableOpacity onPress={ () => navigate('signup') }>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 20}}>Don't Have An Account?</Text>
        </TouchableOpacity>
      </View>      
      
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",    
  },
  svgContainer: {
    //width: width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#34434d",
    fontSize: 80,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
    fontWeight: "300",
  },
  input: {
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 10,
    paddingStart: 30,
  },
});
