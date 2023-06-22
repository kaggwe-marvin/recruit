import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Navigationbar from './components/Navigationbar';
import Joblistings from './components/Joblistings';
import JobsInput from './components/JobsInput';
import Loginpage2 from './components/Loginpage2';
import Applicationform from './components/Applicationform';

import LoginScreen from './components/LoginScreen';
import Select from './components/Select';
import RegisterScreen from './components/RegisterScreen';
import Developers from './components/Developers';



const Stack = createStackNavigator ();


export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Applicants Login page" component={Loginpage} />
        <Stack.Screen name="Joblistings" component={Joblistings} />
        <Stack.Screen name="Organizations Login page" component={Loginpage2} />
        <Stack.Screen name="JobsInput" component={JobsInput} />
        <Stack.Screen name="Applicationform" component={Applicationform} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Developers" component={Developers} />

        
      </Stack.Navigator>
      <StatusBar style="auto" />
        <Navigationbar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  titleContainer: {
    backgroundColor: '#2D2D2D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  // styles for Navigationbar
  navbarContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  // styles for Loginpage
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  inputField: {
    backgroundColor: '#f5f5f5',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#2D2D2D',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // styles for Joblistings
  joblistingsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 20,
  },
  joblistingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  jobCardContainer: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  jobCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCardCompany: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },

 
});


