import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {navigationRef} from '../navigation/navigationUtils';

const useFirebaseService = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = currentUser => {
    setUser(currentUser);
    setLoading(false);
  };

  const register = async (email, password) => {
    try {
      if (email.length && password.length) {
        await auth().createUserWithEmailAndPassword(email, password);
        Alert.alert(
          'Register successfully',
          'Please, login with your account',
          [{text: 'OK', onPress: () => navigationRef.goBack()}],
        );
      } else {
        Alert.alert('Invalid credential', 'Your email & password is invalid', [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    } catch (error) {
      console.error(error);
      if (error.code) {
        Alert.alert(error.code, error.message, [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    }
  };

  const login = async (email, password) => {
    try {
      if (email.length && password.length) {
        await auth().signInWithEmailAndPassword(email, password);
        navigationRef.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        });
      } else {
        Alert.alert('Invalid credential', 'Your email & password is invalid', [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    } catch (error) {
      console.error(error);
      if (error.code) {
        Alert.alert(error.code, error.message, [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
      navigationRef.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    login,
    logout,
    user,
    loading,
  };
};

export default useFirebaseService;
