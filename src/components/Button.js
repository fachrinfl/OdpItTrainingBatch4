import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, sizes, typography} from '../../android/app/src/theme';

const Button = ({title, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, containerStyle]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.blue,
    height: 56,
    borderRadius: sizes.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.textColors.white,
    ...typography.h5,
  },
});

export default Button;
