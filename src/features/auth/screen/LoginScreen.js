import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {navigationRef} from '../../../navigation/navigationUtils';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (email.length && password.length) {
        await auth().signInWithEmailAndPassword(email, password);
        navigationRef.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default LoginScreen;
