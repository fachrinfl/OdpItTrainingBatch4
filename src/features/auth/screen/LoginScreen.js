import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {navigationRef} from '../../../navigation/navigationUtils';
import useFirebaseService from '../../../firebase/FirebaseService';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useFirebaseService();

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

      <Button title="Login" onPress={() => login(email, password)} />
      <Button
        title="Register"
        onPress={() => navigationRef.navigate('RegisterScreen')}
      />
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
