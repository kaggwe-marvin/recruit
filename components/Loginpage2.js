import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Loginpage2 = ({ navigation }) => {

  const handleLogin = () => {

    navigation.navigate('JobsInput');
  };

  return (
    <ScrollView contentContainerStyle>
    <View style={styles.container}>
      <Image
    style={styles.heroImage}
    source={{uri: 'https://mglsd.go.ug/wp-content/uploads/2019/06/1140.png'}}
    resizeMode="contain"
      />
      <Text style={styles.title}>Hello! Organization.</Text>

      <Image
    style={styles.heroImage2}
    source={{uri: 'https://www.bls.gov/careeroutlook/2018/images/blacks-in-the-labor-force_cover.jpg'}}
    resizeMode="contain"
      />

      <Text style={styles.description}>By continuing, you agree to our Terms & Conditions and Privacy Policy</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    height: 'auto',
  },

  description: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    color: 'black',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 30,
    marginBottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: 350,
    paddingVertical: 20,
    marginVertical: 10,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heroImage: {
    width: '130%',
    height: 50,
    marginBottom: 20,
  },
  heroImage2: {
    width: '300%',
    height: 200,
    marginBottom: 20,
  },
});

export default Loginpage2;
