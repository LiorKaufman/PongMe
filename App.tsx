import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import firebase from 'firebase/app'
import 'firebase/database';
import * as firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firabaseAPI,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: 'pong-me',
  storageBucket: 'pong-me.appspot.com',
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
// const z = db.collection("users").doc("J9xEyH9VBAxPe7owStmG").get()
// .then(snapshot => {
//       console.log("t",snapshot.docs)
//         });

const z = db
  .collection('users')
  .get()
  .then((querySnapShot: any) => {
    console.log('users: ', querySnapShot.size)
    querySnapShot.forEach(element  => {
      console.log('user:  ', element.id)
    });
  });
// const xy = db.collection('users').doc('J9xEyH9VBAxPe7owStmG').get().then((documentSnapshot => {
//   console.log("fromdoc: ",documentSnapshot.data())
// }))
// console.log('z123', z);
// const databaseRef = firebase.database().ref();
// console.log(databaseRef)
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // console.log("testing firebase", databaseRef)
  // console.log(firebase.database().ref('users'))
  // const firestore = firebase.firestore()
  // const z = firestore.collection("users").doc('J9xEyH9VBAxPe7owStmG').get()
  // console.log(z)
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
