/* 
// Created by Laraib Sarfraz on 24/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FONTS from './fonts';
import * as Typography from '../assets/fonts/typography';
import COLORS from './theme';

const globalStyles = StyleSheet.create({
  // mainContainer: {
  //   // backgroundColor: 'orange',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: hp(1),
  //   paddingHorizontal: wp(4),
  // },
  logoContainer: {
    // backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontFamily: FONTS.defaultFont,
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: '700',
    marginBottom: hp(2.5),
    color: COLORS.PRIMARY,
    textAlign: 'center',
  },
});

export default globalStyles;
