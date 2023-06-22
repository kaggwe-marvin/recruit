import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { auth } from "../firebase";

const Select = ({ navigation }) => {


  const handleApplicant = () => {
    // applicant
    navigation.navigate('Applicants Login page');
  };

  const handleOrganization = () => {
    // applicant
    navigation.navigate('Organizations Login page');
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        // Redirect to login page or any other desired page
        navigation.replace('Login');
      })
      .catch((error) => {
        // Handle error if any
        console.log('Logout error:', error);
      });
  };
  


  return (
    <ScrollView contentContainerStyle>
    <View style={styles.container}>
      <Image
    style={styles.heroImage}
    source={{uri: 'https://mglsd.go.ug/wp-content/uploads/2019/06/1140.png'}}
    resizeMode="contain"
      />
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.user}>Welcome: {auth.currentUser?.email} </Text>
      <Image
    style={styles.heroImage3}
    source={{uri: 'https://www.cleanlink.com/resources/editorial/2022/28578-interview-sstock-1940410366.jpg'}}
    resizeMode="contain"
      />

      <Text style={styles.subtitle}>Please select the type of party you are.</Text>


      <TouchableOpacity style={styles.button} onPress={handleApplicant}>
        <Text style={styles.buttonText}>Applicant</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleOrganization}>
        <Text style={styles.buttonText}>Organization</Text>
      </TouchableOpacity>

      
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={handleLogout}>
            <Text style={styles.buttonText1}>Logout</Text>
          </TouchableOpacity>
        </View>



    </View>
    </ScrollView>
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
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  user: {
    color: 'purple',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
 
  button1:{
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
    width: '30%',
    borderWidth: 3,
    borderColor: 'purple',
  },
 
  button: {
    backgroundColor: 'green',
    padding: 40,
    marginBottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: 350,
    paddingVertical: 10,
    marginVertical: 10,
    width: '80%',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heroImage: {
    width: '130%',
    height: 50,
    marginBottom: 20,
  },
  heroImage3: {
    width: '130%',
    height: 180,
    marginBottom: 20,
  },
});

export default Select;
