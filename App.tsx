import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import PhotoScreen from './screens/Photo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{ 
            title: 'Accueil',
            headerStyle: { backgroundColor: '#003DA5' },
            headerTintColor: 'white',
            statusBarStyle: 'dark',
            statusBarAnimation: 'fade'
            }}/>
        <Stack.Screen
          name='Photo' 
          component={PhotoScreen} 
          options={{
            title: 'Prendre la photo',
            headerStyle: { backgroundColor: '#003DA5' },
            headerTintColor: 'white',
            statusBarStyle: 'dark',
            statusBarAnimation: 'fade'
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
