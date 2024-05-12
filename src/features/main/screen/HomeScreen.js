import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {navigationRef} from '../../../navigation/navigationUtils';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const handleLogout = async () => {
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

  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
      <Button title="Logout" onPress={handleLogout} />
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
