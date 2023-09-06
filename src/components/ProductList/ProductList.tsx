import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../store/reducers/appReducer';
import ProductCard from '../ProductCard/ProductCard';
import globalStyles from '../../constants/globalStyles';
import PaginationComp from '../PaginationComp/PaginationComp';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButtonComp from '../CustomButtonComp/CustomButtonComp';
import * as Typography from '../../assets/fonts/typography';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.appReducer.products);
  const route = useRoute();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Calculate the range of products to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products?.products?.slice(startIndex, endIndex);

  const handleSeeAllProducts = () => {
    // Navigate to the Categories screen
    navigation.navigate('Products');
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'black',
        paddingHorizontal: widthPercentageToDP(4),
        paddingVertical: heightPercentageToDP(3),
      }}>
      <Text style={globalStyles.heading}>PRODUCTS</Text>

      <FlatList
        data={displayedProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductCard product={item} />} // Use the ProductCard component
      />
      {route.name === 'Home' ? (
        <View style={styles.buttonContainer}>
          <CustomButtonComp
            buttonText="See All Products"
            buttonType="filled"
            fontSize={Typography.FONT_SIZE_16}
            letterSpacing={0.5}
            onPress={handleSeeAllProducts}
          />
        </View>
      ) : (
        <View style={{marginTop: hp(7)}}>
          <PaginationComp
            totalItems={products.products.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
  },
});

export default ProductList;
