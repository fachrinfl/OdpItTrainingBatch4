import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Register screen</Text>
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

export default RegisterScreen;
