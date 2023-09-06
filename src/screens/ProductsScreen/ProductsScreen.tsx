import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import globalStyles from '../../constants/globalStyles';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const ProductsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <View
        style={{
          marginBottom: heightPercentageToDP(4),
          backgroundColor: 'orange',
        }}> */}
      <ProductList />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
