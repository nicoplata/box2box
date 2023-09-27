import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

const homeSlice = createSlice({
    name: "home",

    initialState: {
        allCategories: categories,
        allProducts: products,
        categoryPressed: "",
        productsFilteredByCategory: [],
        productSelected: {},
    },

    reducers: {
        setCategoryPressed: (state, action) => {
            state.categoryPressed = action.payload;
        

            state.productsFilteredByCategory = state.allProducts.filter(
            (el) => el.category == state.categoryPressed )
        }
    },
});

export const { setCategoryPressed } = homeSlice.actions;

export default homeSlice.reducer;