import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import globalStyles from '../../constants/globalStyles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.container}>
          <ImageSlider images={product.images} />
          <View style={styles.details}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>
              Description: {product.description}
            </Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Text style={styles.discount}>
              Discount Percentage: {product.discountPercentage}%
            </Text>
            <Text style={styles.rating}>Rating: {product.rating}</Text>
            <Text style={styles.stock}>Stock: {product.stock}</Text>
            <Text style={styles.brand}>Brand: {product.brand}</Text>
            <Text style={styles.category}>Category: {product.category}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(2),
  },
  container: {
    width: '90%',
    // flex: 1,
    // padding: 10,
  },
  details: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },
  discount: {
    fontSize: 16,
    marginTop: 10,
  },
  rating: {
    fontSize: 16,
    marginTop: 10,
  },
  stock: {
    fontSize: 16,
    marginTop: 10,
  },
  brand: {
    fontSize: 16,
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProductDetailScreen;
