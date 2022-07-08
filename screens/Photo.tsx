import * as React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { styles } from '../styles';

export default function PhotoScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} animated={styles.statusbar.animated} backgroundColor={styles.statusbar.backgroundColor} />
        <Text>Photo Screen</Text>
      </SafeAreaView>
    );
  }