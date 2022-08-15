import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Request } from './Components/API/api';
import Result from './Components/API/api';
import {DeviceKey} from '../Config';

export default function PhotoScreen() {
    let cameraRef = useRef();

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasMediaPermission, setHasMediaPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
      (async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
        setHasMediaPermission(cameraPermission.status === "granted");
      })();
    }, []);

    if(hasCameraPermission === null || !hasCameraPermission) {
      return <Text>Accepter l'accès à la caméra</Text>
    }
    if(mediaLibraryPermission === null || !mediaLibraryPermission) {
      return <Text>Accepter l'accès aux données de l'appareil</Text>
    }
    let r = await Request("/status","GET",DeviceKey)
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} animated={styles.statusbar.animated} backgroundColor={styles.statusbar.backgroundColor} />
        <Text>{r.data}</Text>
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
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={async () => {
              let options = {
                quality: 1,
                base64: true,
                exif: false
              }

              let newPhoto = await cameraRef.current.takePictureAsync(options);
              setPhoto(newPhoto);

              if(photo) {
                
              }
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
