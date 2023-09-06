import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchCategories} from '../../store/reducers/appReducer'; // Create this action
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../constants/globalStyles';
import {useRoute} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CategoryList = ({categories}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchCategories()); // Dispatch an action to fetch categories from your API
  }, [dispatch]);

  const handleCategoryPress = category => {
    // Navigate to a screen that displays products filtered by category
    navigation.navigate('ProductsByCategory', {category});
  };

  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>
        {route.name === 'Home' ? 'FEATURED CATEGORIES' : 'CATEGORIES'}
      </Text>
      <View style={{paddingVertical: hp(1)}}>
        <FlatList
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleCategoryPress(item)}>
              <View style={styles.categoryItem}>
                <Text style={styles.categoryText}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'blue',
    // paddingVertical: hp(1),
    paddingHorizontal: wp(6),
    marginBottom: hp(5),
    paddingVertical: hp(5),
  },
  categoryItem: {
    width: '100%',
    padding: 12,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1, // Add elevation for a shadow effect on Android
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default CategoryList;
