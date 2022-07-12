import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import HomeScreen from './screens/Home';
import PhotoScreen from './screens/Photo';
import LivenessScreen from './screens/Liveness'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home'
            component={HomeScreen}
            options={{ 
              title: 'Accueil',
              headerStyle: { backgroundColor: '#003DA5' },
              headerTintColor: 'white',
              }}/>
          <Stack.Screen
            name='Photo' 
            component={PhotoScreen} 
            options={{
              title: 'Prendre la photo',
              headerStyle: { backgroundColor: '#003DA5' },
              headerTintColor: 'white'
              }}/>
              <Stack.Screen
            name='Liveness' 
            component={LivenessScreen} 
            options={{
              title: 'Test de vivacité: DEMO',
              headerStyle: { backgroundColor: '#003DA5' },
              headerTintColor: 'white'
              }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
