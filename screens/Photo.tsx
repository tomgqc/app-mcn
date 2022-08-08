import * as React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { styles } from '../styles';
import { Request } from './Components/API/api';
import Result from './Components/API/api';
import {DeviceKey} from '../Config';

export default async function PhotoScreen() {
    let r = await Request("/status","GET",DeviceKey)
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} animated={styles.statusbar.animated} backgroundColor={styles.statusbar.backgroundColor} />
        <Text>{r.data}</Text>
        <Text>Se connecter à son compte</Text>
      </SafeAreaView>
    );
  }