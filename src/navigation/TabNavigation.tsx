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
// import BottomNavigation from './BottomNavigation';
import CustomBottomNavigator from './CustomBottomNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CartScreen from '../screens/CartScreen/CartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = props => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomNavigator {...props} />}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Products"
        component={ProductsScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Categories"
        component={CategoriesScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Cart"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};
