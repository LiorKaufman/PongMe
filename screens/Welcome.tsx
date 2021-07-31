
import React, { useState } from 'react';

import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


// Google Signin
import * as Google from 'expo-google-app-auth';
import Navigation from '../navigation';


export default function WelcomeScreen({user,navigation}:{user:any,navigation:any} ) {

    
    
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{JSON.stringify(user)}</Text>
       

    <Button
  onPress={() => setTimeout(() => navigation.navigate('TabOne',{user}), 1000)}
  title="TabOne"
  color="#841584"
  
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
