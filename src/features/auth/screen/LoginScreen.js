import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {navigationRef} from '../../../navigation/navigationUtils';
import useFirebaseService from '../../../firebase/FirebaseService';
import {colors, sizes, typography} from '../../../../android/app/src/theme';
import {Input, Button} from '../../../components';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useFirebaseService();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>
      <View style={styles.lineTitle} />
      <Input
        value={email}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <Input
        value={password}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <Button
        title="Login"
        onPress={() => login(email, password)}
        containerStyle={{marginBottom: sizes.xl8}}
      />
      <Text style={styles.haveAccount}>
        Don’t have an account?{' '}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationRef.navigate('RegisterScreen')}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.xl4,
  },
  lineTitle: {
    width: 87,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.primary.blue,
    marginTop: sizes.xl2,
    marginBottom: 48,
  },
  title: {
    color: colors.textColors.black,
    ...typography.h2,
  },
  haveAccount: {
    color: colors.textColors.grey,
    ...typography.h6,
    textAlign: 'center',
  },
  register: {
    color: colors.primary.blue,
    ...typography.h6,
    top: 2,
  },
});

export default LoginScreen;
