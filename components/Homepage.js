import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

const Homepage = ( {navigation }) => {
  const handleLinkClick = () => {
    Linking.openURL('https://mglsd.go.ug/');
  };

  const handleSocialMediaClick = () =>{
    Linking.openURL('https://twitter.com/Mglsd_UG');
    };
  
    const handleSocialMediaClick1 = () =>{
      Linking.openURL('https://www.facebook.com/mglsd/');
      };
  
      const handleSocialMediaClick2 = () =>{
        Linking.openURL('https://www.instagram.com/explore/locations/757694688/ministry-of-gender-labour-and-social-development/');
        };

  const handleSelect = () => {
    // selection
    navigation.navigate('Login');
  };


  return (
    <ScrollView contentContainerStyle>
    <View style={styles.container}>
      <Image
    style={styles.heroImage}
    source={{uri: 'https://mglsd.go.ug/wp-content/uploads/2019/06/1140.png'}}
    resizeMode="contain"
      />


      <Text style={styles.title}>MGLSD RECRUITMENT MOBILE APPLICATION</Text>
   

      <Image
    style={styles.heroImage2}
    source={{uri: 'https://mglsd.go.ug/wp-content/uploads/2022/07/Amongi-o-873x424.jpg'}}
    resizeMode="contain"
      />

      
      <Text style={styles.description}>Job searching is made easy by connecting applicants to the best employers in your industry. With the mobile application, you can view available jobs, apply for positions, and connect with hiring managements.</Text>

      <Text style={styles.subtitle}>- Vision</Text>
      <Text style={styles.description}>A better standard of living, equity and social cohesion</Text>

      <Text style={styles.subtitle}>- Mission</Text>
      <Text style={styles.description}>Promotion of gender equality, social protection and transformation of communities</Text>

      <Text style={styles.subtitle}>- Goal</Text>
      <Text style={styles.description}>Promote employment and productivity, positive cultural values, rights of vulnerable groups and gender responsive development</Text>

      <Text style={styles.subtitle}>- Mandate</Text>
      <Text style={styles.description}>To mobilize and empower communities to harness their potential while, protecting the rights of vulnerable population groups.</Text>

      <TouchableOpacity style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Start Now</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button1} onPress={handleLinkClick}>
        <Text style={styles.buttonText}>Click here to visit our website</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Social media handles</Text>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity onPress={() => handleSocialMediaClick1('facebook')}>
            <Image
              style={styles.socialMediaLogo}
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'}}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSocialMediaClick2('instagram')}>
            <Image
              style={styles.socialMediaLogo}
              source={{uri: 'data:image/jpeg;base64,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'}}
              resizeMode="contain"
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => handleSocialMediaClick('twitter')}>
            <Image
              style={styles.socialMediaLogo}
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png'}}
              resizeMode="contain"
            />
            </TouchableOpacity>
</View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'purple',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    color: 'darkseagreen',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  button1: {
    backgroundColor: 'purple',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  linkText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  heroImage: {
    width: '130%',
    height: 50,
    marginBottom: 20,
  },
  heroImage2: {
    width: '300%',
    height: 170,
    marginBottom: 20,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  socialMediaLogo: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
});

export default Homepage;
