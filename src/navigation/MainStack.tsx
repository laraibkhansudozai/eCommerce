/* 
// Created by Laraib Sarfraz on 24/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TabNavigation} from './TabNavigation';
import ProductDetailScreen from '../screens/ProductDetailScreen/ProductDetailScreen';
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen/ProductsByCategoryScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigation">
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      /> */}

      <Stack.Screen
        options={({route}) => ({title: route.params.product.title})}
        name="ProductDetails"
        component={ProductDetailScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ProductsByCategory"
        component={ProductsByCategoryScreen}
      />

      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
