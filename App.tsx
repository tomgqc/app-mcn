import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import PhotoScreen from './screens/Photo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Accueil' }}/>
        <Stack.Screen name='About' component={PhotoScreen} options={{ title: 'Prendre la photo' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
