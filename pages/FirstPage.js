import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My To-Do App</Text>
      <Text style={styles.subtitle}>
        Stay organized. Stay productive.
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="TO-DO LIST" onPress={() => navigation.navigate('SecondPage')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="ABOUT" onPress={() => navigation.navigate('ThirdPage')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="CONTACT" onPress={() => navigation.navigate('Contact')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40739e',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#dcdde1',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 8,
    width: 180,
  },
  
});
