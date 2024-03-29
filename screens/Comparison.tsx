import * as React from 'react'
import { SafeAreaView, StatusBar, Pressable, Text, View, Image } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} animated={styles.statusbar.animated} backgroundColor={styles.statusbar.backgroundColor} />
        <Image 
          style={styles.liveness}
          source={require('../assets/liveness.png')}
        />
        <Pressable style={styles.button} onPress={() => navigation.navigate('Photo')}>
          <Text style={styles.buttonText}>
            Commencer la comparaison faciale
          </Text>
        </Pressable>
      </SafeAreaView>
    );
  }