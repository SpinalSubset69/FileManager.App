import 'react-native-gesture-handler';
import {  StyleSheet} from "react-native";
import Toast from 'react-native-toast-message';
import LoginPage from "./src/pages/login";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignupPage from './src/pages/signup';

const Stack = createStackNavigator();

export default function App() {    
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="login" screenOptions={{
       headerShown: false
     }}>
       <Stack.Screen name='login'  component={ LoginPage }/>
       <Stack.Screen name='signup' component={ SignupPage } />
     </Stack.Navigator>
     <Toast></Toast>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
