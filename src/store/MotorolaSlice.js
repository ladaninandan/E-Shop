import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    motorolaMobiles: [
        { id: 1, name: 'Motorola Edge 50 Pro 5G with 68W Charger (Luxe Lavender, 256 GB)', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/i/n/-original-imagzhspjy5g8nh3.jpeg?q=70', price: 29999 },
        { id: 2, name: 'Motorola Edge 50 Pro 5G with 68W Charger (Black Beauty, 256 GB)', imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/i/v/-original-imagzhspm6zvfaeh.jpeg?q=70', price: 29999 },
        { id: 3, name: "Motorola Edge 50 Pro 5G with 125W Charger (Black Beauty, 256 GB)", imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/i/v/-original-imagzhspm6zvfaeh.jpeg?q=70", price: 32999 },
        { id: 4, name: "Motorola Edge 50 Pro 5G with 68W Charger (Vanilla Cream, 256 GB)", imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/q/r/-original-imah2hnztmkzfyjk.jpeg?q=70", price: 32999 },
        { id: 5, name: "Motorola Edge 50 Pro 5G with 125W Charger (Moonlight Pearl, 256 GB)", imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/a/d/-original-imagzhspdmx4egff.jpeg?q=70", price: 35999 },
        { id: 6, name: "Motorola Edge 50 Pro 5G with 68W Charger (Moonlight Pearl, 256 GB)", imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/a/d/-original-imagzhspdmx4egff.jpeg?q=70", price: 23999 }
    ]
};



const motorolaSlice = createSlice({
    name: "MotorolaMobile",
    initialState,
    reducers: {
        showMotorolaMobile: (state, action) => {
            state.motorolaMobiles = action.payload;
        }
    }
});

export const { showMotorolaMobile } = motorolaSlice.actions;

export default motorolaSlice;














