import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Joblistings = () => {
  const [jobList, setJobList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobs'));
        const jobs = [];
        querySnapshot.forEach((doc) => {
          jobs.push({ id: doc.id, ...doc.data() });
        });
        setJobList(jobs);
      } catch (error) {
        console.error('Error fetching jobs: ', error);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyNow = () => {
    navigation.navigate('Applicationform');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.heroImage} source={{ uri: 'https://mglsd.go.ug/wp-content/uploads/2019/06/1140.png' }} resizeMode="contain" />
        {jobList.map((job) => (
          <View style={styles.jobItem} key={job.id}>
            <Text style={styles.jobTitle}>{job.jobTitle}</Text>
            <Text style={styles.orgName}>{job.name}</Text>
            <Text style={styles.salary}>{job.salary}</Text>
            <TouchableOpacity onPress={handleApplyNow} style={styles.button}>
              <Text style={styles.buttonText}>Apply now</Text>
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.footer}>...More to be uploaded soon.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  jobItem: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orgName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  salary: {
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heroImage: {
    width: 'auto',
    height: 30,
    marginBottom: 20,
  },
  footer: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    color: 'green',
    padding: 10,
  },
});

export default Joblistings;
