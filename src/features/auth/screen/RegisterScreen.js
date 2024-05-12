import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {navigationRef} from '../../../navigation/navigationUtils';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
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

      <Button title="Register" onPress={handleRegister} />
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

export default RegisterScreen;
