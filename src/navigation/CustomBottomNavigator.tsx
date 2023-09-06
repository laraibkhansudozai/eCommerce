/* 
// Created by Laraib Sarfraz on 24/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {SvgXml} from 'react-native-svg'; // Import SvgXml for rendering SVG icons
import {dashboardIconActive} from '../assets/svg/dashboardIconActive';

import {dashboardIcon} from '../assets/svg/dashboardIcon';
import * as Typography from '../assets/fonts/typography';

const CustomBottomNavigator = ({state, descriptors, navigation}) => {
  const [activeTab, setActiveTab] = useState('Messages');

  // Define icons for each tab
  const tabIcons = {
    Dashboard: dashboardIcon,
  };
  const tabIconsActive = {
    Dashboard: dashboardIconActive,
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const TabIcon = tabIcons[route.name]; // Get the icon for the current tab
        const TabIconActive = tabIconsActive[route.name]; // Get the icon for the current tab

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            style={[
              styles.tabItem,
              isFocused && styles.activeTab && styles.activeTabIcon,
            ]}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {/* <View style={isFocused && styles.activeTabIcon}> */}
            {/* {isFocused ? (
              <SvgXml xml={TabIconActive} height={17} />
            ) : (
              <SvgXml xml={TabIcon} height={17} />
            )} */}
            {/* </View> */}
            <Text style={[styles.tabText, isFocused && styles.activeTabText]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // color: 'white',
    borderTopWidth: 0.2,
    borderTopColor: 'gray',
    fontFamily: FONTS.defaultFontBold,
  },
  tabItem: {
    // backgroundColor: 'orange',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 0.2,
    borderColor: 'white',
    fontFamily: FONTS.defaultFontBold,
  },
  tabText: {
    fontSize: Typography.FONT_SIZE_13,
    fontWeight: '600',
    color: COLORS.PRIMARY,
    fontFamily: FONTS.defaultFontBold,
    textAlign: 'center',
  },
  activeTab: {
    fontFamily: FONTS.defaultFontBold,

    // backgroundColor: '#253a75',
  },
  activeTabText: {
    color: COLORS.SECONDARY,
    fontFamily: FONTS.defaultFontBold,
  },

  activeTabIcon: {
    color: 'pink',
    // backgroundColor: 'black',
    fill: 'pink',
  },
});

export default CustomBottomNavigator;
