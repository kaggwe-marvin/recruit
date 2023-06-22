
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

export default function Application() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [orgOfInterest, setOrgOfInterest] = useState('');
  const [skills, setSkills] = useState('');
  const [eduLevel, setEduLevel] = useState('');
  const [submissionEmail, setSubmissionEmail] = useState('');

  const handleSubmit = () => {
    const subject = `Application for ${jobTitle} at ${orgOfInterest}`;
    const body = `Name: ${name}\nAge: ${age}\nJob Title: ${jobTitle}\nOrganisation of Interest: ${orgOfInterest}\nSkills: ${skills}\nEducation Level: ${eduLevel}\nSubmission Email: ${submissionEmail}`;
    MailComposer.composeAsync({
      recipients: [ `${submissionEmail}` ],

      subject,
      body
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
      <Text style={styles.title}>Application Form</Text>
      <Text style={styles.subtitle}>Hello Esteemed Applicant, 
      Please fill in your details below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={text => setJobTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Organisation of Interest"
        value={orgOfInterest}
        onChangeText={text => setOrgOfInterest(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Skills"
        value={skills}
        onChangeText={text => setSkills(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Education Level"
        value={eduLevel}
        onChangeText={text => setEduLevel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Organization's Submission Email"
        keyboardType="email-address"
        value={submissionEmail}
        onChangeText={text => setSubmissionEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SEND NOW</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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
