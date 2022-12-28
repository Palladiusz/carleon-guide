import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Przedmiot } from "../../interfaces";

export const itemsSlice = createSlice({
  name: "items",
  initialState: { items: <Przedmiot[]>[], searchTerm: "" },
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setItems: (state, action: PayloadAction<Przedmiot[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<Przedmiot>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const updated = state.items.filter((e) => {
        return e.id != action.payload;
      });
      state.items = updated;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    modifyItem: (state, action: PayloadAction<Przedmiot>) => {
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
  setItems,
} = itemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.items;

export default itemsSlice;
