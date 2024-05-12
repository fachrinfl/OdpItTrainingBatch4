import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import useFirebaseService from '../../../firebase/FirebaseService';

const HomeScreen = () => {
  const {user, logout} = useFirebaseService();

  return (
    <View style={styles.screen}>
      {user && <Text>{user.email}</Text>}
      <Button title="Logout" onPress={() => logout()} />
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
