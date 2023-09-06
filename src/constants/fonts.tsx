/* 
// Created by Laraib Sarfraz on 24/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

const FONTS = {
  ...Platform.select({
    ios: {
      Arial_BLACK: 'Arial-Black',
      Arial_REGULAR: 'Arial-Regular',
      defaultFont: 'Arial-Regular',
      defaultFontBold: 'Arial-Bold',
      defaultFontBlack: 'Arial-Black',
    },
    android: {
      Arial_BLACK: 'ArialBlack',
      Arial_REGULAR: 'ArialRegular',
      defaultFont: 'ArialRegular',
      defaultFontBold: 'ArialBold',
      defaultFontBlack: 'ArialBlack',
    },
  }),
};

export default FONTS;
