/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {navigationRef} from './navigationUtils';
import {colors} from '../../android/app/src/theme';

const Router = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef} theme={colors.navigationTheme}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;
