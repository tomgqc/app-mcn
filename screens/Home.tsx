import * as React from 'react'
import { SafeAreaView, StatusBar, Pressable, Text, View, Image } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation }:{navigation:any}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} animated={styles.statusbar.animated} backgroundColor={styles.statusbar.backgroundColor} />
        <Image 
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <Pressable style={styles.button} onPress={() => navigation.navigate('Photo')}>
          <Text style={styles.buttonText}>
            Prendre une photo
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Liveness')}>
          <Text style={styles.buttonText}>
            Faire un test de vivacité
          </Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Comparison')}>
          <Text style={styles.buttonText}>
            Faire une DEMO de comparaison faciale
          </Text>
        </Pressable>
      </SafeAreaView>
    );
  }
