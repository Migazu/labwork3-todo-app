import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ThirdPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        My To-Do App was created as part of Labwork-3 in the Cross-Platform Mobile Development course at Laurea University of Applied Sciences.
      </Text>
      <Text style={styles.text}>
        It’s a simple React Native app that lets you add and manage tasks.
      </Text>
      <Text style={styles.text}>
        Developer: Mika Venäläinen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#000000ff' },
  text: { fontSize: 16, marginBottom: 10, color: '#2f3640' },
});
