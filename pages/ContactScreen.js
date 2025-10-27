import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.text}>If you have any questions or feedback, feel free to contact me:</Text>
      <Text style={styles.email}>mika.venalainen@example.com</Text>

      <Button
        title="Send Email"
        onPress={() => Linking.openURL('mailto:mika.venalainen@example.com')}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#000000ff' },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
  email: { color: '#00a6ffff', marginBottom: 20, fontWeight: 'bold' },
});
