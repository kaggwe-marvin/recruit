import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { auth } from "../firebase";
  
  import {
    signInWithEmailAndPassword
  } from "firebase/auth";



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Select");
      }
    });
    return unsubscribe;
  }, []);

  const handleReg = () => {
    // selection
    navigation.replace('Register');
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User Logged in successfully:", user.email);
      })
      .catch((_error) => {
        alert("Wrong Email or Password");
      });
  };

  return (
    <KeyboardAvoidingView>
    <ScrollView contentContainerStyle>
    <View style={styles.container}>
      <Image
    style={styles.heroImage}
    source={{uri: 'https://mglsd.go.ug/wp-content/uploads/2019/06/1140.png'}}
    resizeMode="contain"
      />
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Please login to access our services.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} 
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Please register first to create account.</Text>
      <TouchableOpacity style={styles.buttonreg} onPress={handleReg}>
        <Text style={styles.buttonText2}>Register Now</Text>
      </TouchableOpacity> 
      
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
    marginTop: 20,
  },
  subtitle: {
    color: 'darkseagreen',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 20,
    marginBottom: 20,
    borderRadius: 100,
    alignItems: 'center',
    width: 350,
    paddingVertical: 5,
    marginVertical: 10,
    width: '80%',
  },
  buttonreg: {
    backgroundColor: 'purple',
    padding: 20,
    marginBottom: 20,
    borderRadius: 100,
    alignItems: 'center',
    width: 350,
    paddingVertical: 5,
    marginVertical: 10,
    width: '50%',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  heroImage: {
    width: '130%',
    height: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
