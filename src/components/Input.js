import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors, sizes, typography} from '../../android/app/src/theme';

const Input = ({value, onChangeText, placeholder, secureTextEntry = false}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 56,
    width: '100%',
    marginBottom: sizes.xl8,
    paddingHorizontal: sizes.large,
    paddingVertical: sizes.xl,
    backgroundColor: colors.textColors.whiteGrey,
    borderRadius: sizes.medium,
    ...typography.h6,
  },
});

export default Input;
