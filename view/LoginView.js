import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

export default LoginView=() =>{

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={require('../images/email.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
          />
        </View>
  
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={require('../images/padlock.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>
  
        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text 
            style={styles.loginText}
            >Login</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
          <View style={styles.socialButtonContent}>
            <Image
              style={styles.icon}
              source={require('../images/facebook.png')}
            />
            <Text style={styles.loginText}>Continue with facebook</Text>
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image
              style={styles.googleicon}
              source={require('../images/google.png')}
            />
            <Text style={{color: 'black'}}>Sign in with google</Text>
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Have account? Register</Text>
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
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1,
    },
    icon: {
      width: 30,
      height: 30,
    },
    googleicon: {
      width: 20,
      height: 20,
      marginRight: 15,
    },
    inputIcon: {
      marginLeft: 15,
      justifyContent: 'center',
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
    fabookButton: {
      backgroundColor: '#3b5998',
    },
    googleButton: {
      backgroundColor: 'white',
    },
    loginText: {
      color: 'white',
    },
    restoreButtonContainer: {
      width: 250,
      marginBottom: 15,
      alignItems: 'flex-end',
    },
    socialButtonContent: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialIcon: {
      color: '#FFFFFF',
      marginRight: 5,
    },
  })