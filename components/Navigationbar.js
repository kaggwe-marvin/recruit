import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Navigationbar = () => {
  const navigation = useNavigation()

 
  return (
    <View style={styles.navbar}>
      <ScrollView horizontal={true}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('Developers')}>
            <Text style={styles.button}>Our Team</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'seagreen',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'right',
    color: 'purple',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
})

export default Navigationbar;