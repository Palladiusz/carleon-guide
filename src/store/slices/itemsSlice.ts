import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Item } from "../../interfaces";

const initialState = <Item[]>[];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },
    decrement: (state) => {
      //   state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    modifyItem: (state, action: PayloadAction<Item>) => {
      state.map((e) => {
        if (e.id == action.payload.id) {
          const newItem = action.payload;

          return { ...e, ...newItem };
        } else {
          return e;
        }
      });
    },
  },
});

export const { addItem, decrement, modifyItem } = itemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.items;

export default itemsSlice;
