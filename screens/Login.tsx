
import React, { useState } from 'react';

import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


// Google Signin
import * as Google from 'expo-google-app-auth';
import Navigation from '../navigation';


export default function LoginScreen({navigation}) {

    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [googleSubmitting, setGoogleSubmitting] = useState(false);



    const handleMessage = (message, type = '') => {
        setMessage(message);
        setMessageType(type);
      };

    const handleGoogleSignin = () => {
        setGoogleSubmitting(true);
        const config = {
          iosClientId: `304425060222-frnlalsf9v83pio14m8oked103jq87vg.apps.googleusercontent.com`,
          androidClientId: `304425060222-q63ea7dpakhd7eopa3qobpt17lub6ffa.apps.googleusercontent.com`,
          clientId: `304425060222-hdbdqfr93megnc2ug2g4tfiqajbahpnq.apps.googleusercontent.com`,
          scopes: ['profile', 'email'],
        };
    
        Google.logInAsync(config)
          .then((result) => {
            const { type, user } = result;
            if (type == 'success') {
              const { email, name, photoUrl } = user;
              handleMessage('Google signin successful', 'SUCCESS');
              console.log(name)
              setTimeout(() => navigation.navigate('Welcome'), 1000);
            } else {
              handleMessage('Google Signin was cancelled');
            }
            setGoogleSubmitting(false);
          })
          .catch((error) => {
            handleMessage('An error occurred. Check your network and try again');
            console.log(error);
            setGoogleSubmitting(false);
          });
      };
    
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
  onPress={handleGoogleSignin}
  title="Login"
  color="#841584"
  accessibilityLabel="Login with google"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
