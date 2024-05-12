import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {colors} from '../../android/app/src/theme';

const ScreenIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.primary.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textColors.white,
  },
});

export default ScreenIndicator;
