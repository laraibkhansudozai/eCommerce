import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {
  fetchCategoriesAPI,
  fetchProductsAPI,
  fetchSingleProductAPI,
  fetchCategoryProductsAPI,
} from '../../api/api';

// Define the initial state
interface AppState {
  categories: any[]; // Adjust the type as per your API response
  products: any[]; // Adjust the type as per your API response
  singleProduct: any | null; // Adjust the type as per your API response
  categoryProducts: any[]; // Adjust the type as per your API response
}

const initialState: AppState = {
  categories: [],
  products: [],
  singleProduct: null,
  categoryProducts: [],
};

// Define async thunk actions to fetch data

export const fetchCategories = createAsyncThunk(
  'app/fetchCategories',
  async () => {
    const response = await fetchCategoriesAPI();
    return response;
  },
);

export const fetchProducts = createAsyncThunk('app/fetchProducts', async () => {
  const response = await fetchProductsAPI();
  return response;
});

export const fetchSingleProduct = createAsyncThunk(
  'app/fetchSingleProduct',
  async (productId: number) => {
    const response = await fetchSingleProductAPI(productId);
    return response;
  },
);

export const fetchCategoryProducts = createAsyncThunk(
  'app/fetchCategoryProducts',
  async (categoryName: string) => {
    const response = await fetchCategoryProductsAPI(categoryName);
    return response;
  },
);

// Create a slice of the reducer
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Add any other non-async reducers here if needed
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
      });
  },
});

export const {
  /* Add your non-async actions here if needed */
} = appSlice.actions;

export default appSlice.reducer;
