import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../features/auth';
import {HomeScreen} from '../features/main';
import useFirebaseService from '../firebase/FirebaseService';
import {ScreenIndicator} from '../components';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user, loading} = useFirebaseService();
  console.log(user);
  const initialRoute = user ? 'HomeScreen' : 'LoginScreen';

  if (loading) {
    return <ScreenIndicator />;
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
