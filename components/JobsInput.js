import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image, KeyboardAvoidingView } from 'react-native';


import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';



export default function JobsInput() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');
  const [eduLevel, setEduLevel] = useState('');
  const [experience, setExperience] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [submissionEmail, setSubmissionEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, 'jobs'), {
        name,
        date,
        jobTitle,
        salary,
        skills,
        location,
        eduLevel,
        experience,
        contact,
        description,
        submissionEmail
      });
  
      console.log("Document written with ID: ", docRef.id);
  
      // Clear the form fields
      setName('');
      setDate('');
      setJobTitle('');
      setSalary('');
      setSkills('');
      setLocation('');
      setEduLevel('');
      setExperience('');
      setContact('');
      setDescription('');
      setSubmissionEmail('');
  
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
      <Text style={styles.title}>Job Vacancy Form</Text>
      <Text style={styles.subtitle}>Hello __Organization, Please fill in your details below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={text => setDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={text => setJobTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Salary"
        keyboardType="numeric"
        value={salary}
        onChangeText={text => setSalary(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Skills"
        value={skills}
        onChangeText={text => setSkills(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={text => setLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Minimum Education Level required"
        value={eduLevel}
        onChangeText={text => setEduLevel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Experience for the job"
        value={experience}
        onChangeText={text => setExperience(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Human Resource's Contact"
        keyboardType="numeric"
        value={contact}
        onChangeText={text => setContact(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Job description/details"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="HR department Email"
        keyboardType="email-address"
        value={submissionEmail}
        onChangeText={text => setSubmissionEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SUBMIT TO ADMIN</Text>
      </TouchableOpacity>
      
    </View>
    </ScrollView>
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  heroImage: {
    width: '130%',
    height: 50,
    marginBottom: 20,
  },
});
