import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

// Function to fetch all categories
export const fetchCategoriesAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Function to fetch all products
export const fetchProductsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Function to fetch a single product by ID
export const fetchSingleProductAPI = async productId => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Function to fetch products by category
export const fetchCategoryProductsAPI = async categoryName => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/category/${categoryName}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching category products:', error);
    throw error;
  }
};
