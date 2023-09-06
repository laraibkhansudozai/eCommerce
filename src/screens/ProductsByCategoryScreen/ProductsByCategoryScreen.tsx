import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';

const ProductsByCategoryScreen = ({route}) => {
  const {category} = route.params;
  const navigation = useNavigation();

  const products = useSelector(state => state.appReducer.products);

  const filteredProducts = products.products.filter(
    product => product.category === category,
  );

  const handleProductPress = product => {
    // Navigate to the product details screen and pass the product data as a parameter
    navigation.navigate('ProductDetails', {product});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Products in{' '}
          {category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('-')}
        </Text>
        {filteredProducts.length === 0 ? (
          <Text style={styles.noProductsMessage}>
            No products available in this category.
          </Text>
        ) : (
          <FlatList
            data={filteredProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleProductPress(item)}>
                <View style={styles.productItem}>
                  <Image
                    source={{uri: item.thumbnail}} // Use the 'thumbnail' property for the image URL
                    style={styles.productImage}
                  />
                  <Text style={styles.productTitle}>Title: {item.title}</Text>
                  <Text style={styles.productDescription}>
                    Description: {item.description}
                  </Text>
                  <Text style={styles.productPrice}>Price: ${item.price}</Text>
                  {/* Add more product details as needed */}
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.PRIMARY,
    textAlign: 'center',
  },
  productItem: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  noProductsMessage: {
    fontSize: 14,
    margin: 16,
    textAlign: 'center',
  },
});

export default ProductsByCategoryScreen;
