import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,

  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  import { useNavigation } from "@react-navigation/native";
  import { auth } from "../firebase";
  
  import {
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  
  const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Select");
      }
    });
    return unsubscribe;
  }, []);

  const handleLog = () => {
    // selection
    navigation.replace('Login');
  };
    
    const handleRegister = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("User account created successfully:", user.email);

        })
        .catch((_error) => {
          alert("Invalid Email");
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
      <Text style={styles.subtitle}>Please register to access our services.</Text>
          <TextInput
            placeholder="Email"
            values={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            values={email}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
       
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleRegister}
            style={[styles.button]}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.subtitle}>Already have an account, Login below.</Text>
      <TouchableOpacity style={styles.buttonreg} onPress={handleLog}>
        <Text style={styles.buttonText2}>Login Now</Text>
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
  export default RegisterScreen;
