/* 
// Created by Laraib Sarfraz on 24/08/2023.
// Company: Codistan Pvt ltd.
//
// Current developer:  Laraib Sarfraz
// Edited by : [if any]
//
// Reference: [if any]
*/

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const PaginationComp = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageRange = () => {
    const pageRange = [];
    const maxPageToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPageToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageToShow - 1);

    while (pageRange.length < maxPageToShow && startPage <= endPage) {
      pageRange.push(startPage);
      startPage++;
    }

    return pageRange;
  };

  const handlePageChange = newPage => {
    onPageChange(newPage);
  };

  const pageRange = getPageRange();

  return (
    <View style={styles.paginationContainer}>
      {pageRange.map(pageNumber => (
        <TouchableOpacity
          key={pageNumber}
          style={[
            styles.paginationButton,
            pageNumber === currentPage && styles.activeButton,
          ]}
          onPress={() => handlePageChange(pageNumber)}>
          <Text
            style={[
              styles.paginationButtonText,
              pageNumber === currentPage && styles.activeButtonText,
            ]}>
            {pageNumber}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
  paginationButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: COLORS.SECONDARY,
  },
  paginationButtonText: {
    color: 'white',
  },
  activeButtonText: {
    fontWeight: 'bold',
  },
});

export default PaginationComp;
