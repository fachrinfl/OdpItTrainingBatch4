import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import useFirebaseService from '../../../firebase/FirebaseService';
import {colors, sizes, typography} from '../../../../android/app/src/theme';
import {Input, Button} from '../../../components';
import {navigationRef} from '../../../navigation/navigationUtils';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useFirebaseService();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register new account</Text>
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
        title="Register"
        onPress={() => register(email, password)}
        containerStyle={{marginBottom: sizes.xl8}}
      />
      <Text style={styles.haveAccount}>
        Already have an account?{' '}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationRef.navigate('LoginScreen')}>
          <Text style={styles.login}>Login</Text>
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
  login: {
    color: colors.primary.blue,
    ...typography.h6,
    top: 2,
  },
});

export default RegisterScreen;
