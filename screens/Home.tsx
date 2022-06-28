import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <StatusBar style="auto" />
        <Button
            title='Prendre une photo'
            onPress={() => navigation.navigate('About')}
        />
      </View>
    );
  }