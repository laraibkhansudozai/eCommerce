import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constants';
import * as Typography from '../../assets/fonts/typography';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomButtonComp = ({
  buttonText,
  buttonType,
  fontSize,
  letterSpacing,
  onPress,
}) => {
  const buttonStyles =
    buttonType === 'border' ? styles.borderButton : styles.filledButton;
  const textColor = buttonType === 'border' ? '#012561' : 'white';

  const textStyle = {
    color: textColor,
    fontSize: fontSize, // Use the provided fontSize prop
    letterSpacing: letterSpacing,
    fontFamily: FONTS.defaultFont,
  };

  return (
    // <View>
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
    // </View>
  );
};

export default CustomButtonComp;

const styles = StyleSheet.create({
  button: {
    // width: '60%',
    // height: 40,
    // marginTop: hp(5),
    // marginBottom: 8,
    paddingHorizontal: wp(4),
    paddingVertical: wp(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  filledButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  borderButton: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  buttonText: {
    fontSize: Typography.FONT_SIZE_16,
    letterSpacing: 0.5,
    fontFamily: FONTS.defaultFont,
  },
});
