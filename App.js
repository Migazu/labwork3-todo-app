import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import ContactScreen from './pages/ContactScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: { backgroundColor: '#40739e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        }}
      >
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{ title: 'To-Do List' }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{ title: 'About' }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: 'Contact' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
