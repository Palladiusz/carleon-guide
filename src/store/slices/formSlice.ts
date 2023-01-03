import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Fraction } from "../../interfaces";

const initialState = {
  name: "",
  buy: 0,
  sell: 0,
  enchant: 0,
  tier: 2,
  fraction: Fraction.TF,
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    changeName: (state, action: { payload: { name: string } }) => {
      return { ...state, name: action.payload.name };
    },
    changeBuy: (state, action: { payload: { buy: number } }) => {
      return { ...state, buy: action.payload.buy };
    },
    changeSell: (state, action: { payload: { sell: number } }) => {
      return { ...state, sell: action.payload.sell };
    },
    changeEnchant: (state, action: { payload: { enchant: number } }) => {
      return { ...state, enchant: action.payload.enchant };
    },
    changeTier: (state, action: { payload: { tier: number } }) => {
      return { ...state, tier: action.payload.tier };
    },
    changeFraction: (state, action: { payload: { fraction: Fraction } }) => {
      return { ...state, fraction: action.payload.fraction };
    },
    resetForm: () => {
      return {
        name: "",
        buy: 0,
        sell: 0,
        enchant: 0,
        tier: 2,
        fraction: Fraction.TF,
      };
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

export const selectForm = (state: RootState) => state.form;

export default formSlice;
