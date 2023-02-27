import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text,Button, View, TextInput, TouchableOpacity, Image } from 'react-native'

import ContactView from './view/ContactView';
import LoginView from './view/LoginView';
import ProductView from './view/ProductView';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="loginPage" component={LoginView} />
        <Stack.Screen name="ContactPage" component={ContactView} />
        <Stack.Screen name="ProductPage" component={ProductView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeView=({navigation}) =>{

  return (
    <View style={styles.container}>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
      accessible={true}
      accessibilityLabel="Tap me!"
      accessibilityHint="Navigates to Login screen">  
        <Text 
          style={styles.loginText}
          onPress={() =>
            navigation.navigate('loginPage')
          }
          >login Page</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
        <Text 
          style={styles.loginText}
          onPress={() =>
            navigation.navigate('ContactPage')
          }
          >Contact Page</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
        <Text 
          style={styles.loginText}
          onPress={() =>
            navigation.navigate('ProductPage')
          }
          >Product Page</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d2e9',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#56545d',
  },
  loginText: {
    color: 'white',
  },
})

export default MyStack;