import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../styles';

export default function PhotoScreen() {
    return (
      <View style={styles.container}>
        <Text>Photo Screen</Text>
        <StatusBar style="auto"/>
      </View>
    );
  }