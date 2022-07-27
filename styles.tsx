import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    liveness: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: 300,
      width: 300,
      margin: 50,
    },
    logo: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: 200,
      margin: 50,
      height: 43,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      elevation: 3,
      marginTop: 25,
      backgroundColor: '#003DA5',
      flex: 0.1,
      margin: 20,
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    statusbar: {
      animated: true,
      backgroundColor: "#002970"
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    cameraButton: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'transparent',
      margin: 20,
    },
    icon: {
      width: 52,
      height: 52,
    }
  });