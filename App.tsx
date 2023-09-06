/* 
// Created by Laraib Sarfraz on 23/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DataProvider} from './src/contexts/DataContext';

import {store} from './src/store';

import {Provider} from 'react-redux';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      {/* <DataProvider> */}

      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
      {/* </DataProvider> */}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
