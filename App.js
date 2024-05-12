import React from 'react';
import {firebase} from '@react-native-firebase/app';
import {Router} from './src/navigation';

function App() {
  console.log(
    'Firebase Credentials',
    JSON.stringify(firebase.apps, undefined, 2),
  );

  return <Router />;
}

export default App;
