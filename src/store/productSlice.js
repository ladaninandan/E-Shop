
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'aProduct 1', price: 30, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/i/d/xxl-rn010-real-navy-original-imaggz8pamshybt7.jpeg?q=70', brand: 'Brand A', discount: 40, about: "uishgiusehguisu", ProductDetails: "Ms Ess Men Solid Polo Neck Pure Cotton White T-Shirt", PriceTag: "Special price", },
        { id: 2, name: 'cProduct 2', price: 20, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/2/p/4/m-ax-blk-ia-axolotl-original-imagqyyyahgjgkay.jpeg?q=70', brand: 'Brand A', discount: 50 },
        { id: 3, name: 'bProduct 3', price: 40, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/p/f/s-csm0-751-748-750-3p-checks-squires-original-imagybh64nseusdz.jpeg?q=70', brand: 'Brand b', discount: 60 },
        { id: 4, name: 'Product 4', price: 10, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/8/e/s-af-mn-rn-fs-black-af-collection-original-imagzeqh8yvtnefz.jpeg?q=70', brand: 'Brand c', discount: 40 },
        { id: 5, name: 'abroduct 5', price: 930, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/e/j/l-rhp0632-red-tape-original-imagnefcdmzyhshm.jpeg?q=70', brand: 'Brand b', discount: 40 },
        { id: 6, name: 'cProduct 7', price: 620, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/f/l/z/m-rhp1096a-red-tape-original-imagvjg9xsf8qmhk.jpeg?q=70', brand: 'Brand A', discount: 50 },
        { id: 7, name: 'bProduct 8', price: 440, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg?q=70', brand: 'Brand b', discount: 60 },
        { id: 8, name: 'Product 9', price: 210, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/i/u/m-fmtsh6885-flying-machine-original-imahyusvqgjgsgff.jpeg?q=70', brand: 'Brand c', discount: 70 },
    ],
    selectedBrands: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        sortpricehightolow: (state) => {
            state.products.sort((a, b) => b.price - a.price);
        },
        sortpricelowtohigh: (state) => {
            state.products.sort((a, b) => a.price - b.price);
        },
        sortnameatoz: (state) => {
            state.products.sort((a, b) => a.name.localeCompare(b.name));
        },
        sortnameztoa: (state) => {
            state.products.sort((a, b) => b.name.localeCompare(a.name));
        },
        sortdiscounthightolow: (state) => {
            state.products.sort((a, b) => b.discount - a.discount);
        },
        toggleBrand: (state, action) => {
            const brand = action.payload;
            if (state.selectedBrands.includes(brand)) {
                state.selectedBrands = state.selectedBrands.filter(item => item !== brand);
            } else {
                state.selectedBrands.push(brand);
            }
        }
    }
});



export const productAction = productSlice.actions;

export default productSlice; 