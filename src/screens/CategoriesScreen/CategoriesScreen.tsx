import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../constants/globalStyles';

const CategoriesScreen = () => {
  const categories = useSelector(state => state.appReducer.categories);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <View style={globalStyles.mainContainer}> */}
      <CategoryList categories={categories} />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
});
