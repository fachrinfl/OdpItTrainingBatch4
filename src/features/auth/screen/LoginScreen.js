import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {navigationRef} from '../../../navigation/navigationUtils';

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Login screen</Text>
      <Button
        title="Register"
        onPress={() => navigationRef.navigate('RegisterScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
