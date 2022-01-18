import { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ButtonGradient from "../components/button";
import { validate } from "../validates";
import SvgTop from "./../svg/login-header";
import { showToast } from "../util/toast";
import { apiCalls } from "../fetch";

const { width, height } = Dimensions.get("window");

export default function SignupPage({ navigation: { navigate } }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePasword, setRePassword] = useState("");

  const signUp = async () => {
    try {

      validate.Email(email);
      validate.UserName(userName);
      validate.Password(password);
      validate.RepeatPassword(password, rePasword);

      //TODO: API CALL TO POST NEW USER
        const data = await apiCalls.signup({
            email, userName, password
        });

        console.log(data);

        if(data.statusCode !== 200){
            showToast.error('Error', data.value.detail);
        }

        if(data.statusCode === 200){
            showToast.success('Welcome', 'Account Saved On DataBase')
            navigate('login');
        }

      //Navigate to main scren
      //navigate('login');

    } catch (e) {
      showToast.error("Error", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={(styles.svgContainer = {})}>
        <SvgTop />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#34434d", fontSize: 30, fontWeight: "bold" }}>
          {" "}
          Create New Account{" "}
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="user@gmail.com"
        ></TextInput>

        <TextInput
          value={userName}
          onChangeText={(text) => setUserName(text)}
          style={styles.input}
          placeholder="Username"
        ></TextInput>

        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
        ></TextInput>

        <TextInput
          value={rePasword}
          onChangeText={(text) => setRePassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Repeat Password"
        ></TextInput>

        <ButtonGradient event={signUp} title="SignUp" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svgContainer: {
    //width: width,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
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
