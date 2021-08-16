import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase/app'
import "firebase/database"

import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firabaseAPI,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: "pong-me",
  storageBucket: "pong-me.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const databaseRef = firebase.database().ref();
console.log(databaseRef)
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  console.log("testing firebase", databaseRef)

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
