import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS} from '../../constants';

const ImageSlider = ({images}) => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  console.log('lar images', images);

  const renderCarouselItem = ({item}) => {
    console.log('lar image item', item);
    return (
      <View style={styles.carouselItem}>
        <Image source={{uri: item}} style={styles.carouselImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderCarouselItem}
        sliderWidth={290}
        itemWidth={270} // Adjust the width to remove the padding on the right side
        onSnapToItem={index => setActiveSlideIndex(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlideIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    // alignItems: 'center',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  paginationContainer: {
    paddingVertical: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: COLORS.SECONDARY,
  },
});

export default ImageSlider;
