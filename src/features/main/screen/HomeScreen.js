import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {navigationRef} from '../../../navigation/navigationUtils';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
      <Button
        title="Login"
        onPress={() =>
          navigationRef.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
          })
        }
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

export default HomeScreen;
