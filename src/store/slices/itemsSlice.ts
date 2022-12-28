import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Item } from "../../interfaces";

export const itemsSlice = createSlice({
  name: "items",
  initialState: { items: <Item[]>[], searchTerm: "" },
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const updated = state.items.filter((e) => {
        return e.id != action.payload;
      });
      state.items = updated;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    modifyItem: (state, action: PayloadAction<Item>) => {
      state.items.map((e) => {
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

export const {
  changeSearchTerm,
  addItem,
  removeItem,
  modifyItem,
} = itemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.items;

export default itemsSlice;
