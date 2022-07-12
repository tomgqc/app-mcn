import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
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
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      marginTop: 25,
      backgroundColor: '#003DA5',
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
    }
  });