import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../store/reducers/appReducer'; // Import your action
import CategoryList from '../../components/CategoryList/CategoryList';
import ProductList from '../../components/ProductList/ProductList';
import globalStyles from '../../constants/globalStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CustomButtonComp from '../../components/CustomButtonComp/CustomButtonComp';
import * as Typography from '../../assets/fonts/typography';
import {COLORS} from '../../constants';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.appReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories()); // Dispatch an action to fetch categories when the component mounts
  }, [dispatch]);

  const handleSeeAllCategories = () => {
    // Navigate to the Categories screen
    navigation.navigate('Categories');
  };

  const keyExtractor = (item, index) => `${item}_${index}`;

  const renderItem = ({item}) => {
    if (item === 'categories') {
      return (
        <View
          style={{
            marginBottom: hp(8),
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <CategoryList categories={categories.slice(0, 5)} />
          <View style={styles.buttonContainer}>
            <CustomButtonComp
              buttonText="See All Categories"
              buttonType="filled"
              fontSize={Typography.FONT_SIZE_16}
              letterSpacing={0.5}
              onPress={handleSeeAllCategories}
            />
          </View>
        </View>
      );
    } else if (item === 'divider') {
      return <View style={styles.line}></View>;
    } else if (item === 'products') {
      return <ProductList />;
    }
  };

  // Define your data for the FlatList
  const data = ['categories', 'divider', 'products'];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={globalStyles.mainContainer}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: hp(0.6),
    // width: '90%',
    backgroundColor: COLORS.PRIMARY,
    marginBottom: hp(3),
    marginHorizontal: widthPercentageToDP(6),
  },
});

export default HomeScreen;
