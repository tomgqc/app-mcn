import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles';
import { Camera, CameraType } from 'expo-camera';

export default function PhotoScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} animated={styles.statusbar.animated} backgroundColor={styles.statusbar.backgroundColor} />
        <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <Image
              style={styles.icon}
              source={require('../assets/flip-camera.png')}
            />
          </TouchableOpacity>
        </View>
      </Camera>
      </SafeAreaView>
    );
  }