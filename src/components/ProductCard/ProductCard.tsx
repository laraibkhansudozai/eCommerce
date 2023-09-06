import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ProductCard = ({product}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetails', {product});
      }}>
      <View style={styles.card}>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <View style={styles.cardBody}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>
            Description: {product.description}
          </Text>
          <Text style={styles.price}>Price: ${product.price}</Text>
          {/* Add more product details here */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 10,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardBody: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'green',
  },
});

export default ProductCard;
