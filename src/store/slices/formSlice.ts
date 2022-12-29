import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Fraction } from "../../interfaces";

const initialState = {
  name: "",
  buy: 0,
  sell: 0,
  enchant: 0,
  tier: 1,
  fraction: Fraction.TF,
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeBuy: (state, action: PayloadAction<number>) => {
      state.buy = action.payload;
    },
    changeSell: (state, action: PayloadAction<number>) => {
      state.sell = action.payload;
    },
    changeEnchant: (state, action: PayloadAction<number>) => {
      state.enchant = action.payload;
    },
    changeTier: (state, action: PayloadAction<number>) => {
      state.tier = action.payload;
    },
    changeFraction: (state, action: PayloadAction<Fraction>) => {
      state.fraction = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.buy = 0;
      state.sell = 0;
      state.enchant = 0;
      state.tier = 1;
      state.fraction = Fraction.TF;
    },
  },
});

export const {
  changeName,
  changeBuy,
  changeSell,
  changeEnchant,
  changeTier,
  changeFraction,
  resetForm,
} = formSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectForm = (state: RootState) => state.form;

export default formSlice;
