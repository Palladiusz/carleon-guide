import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Przedmiot } from "../../interfaces";
import { calculateTotalProfit, initialCalculations } from "../../logic";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: <Przedmiot[]>[],
    searchTerm: "",
    outcome: 0,
    income: 0,
    percentageProfit: "",
  },
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setItems: (state, action: PayloadAction<Przedmiot[]>) => {
      state.items = action.payload;

      if (state.items.length > 0) {
        console.log(typeof action.payload[0].buy);
        const {
          totalIncome,
          totalOutcome,
          percentageTotalValue,
        } = initialCalculations(state.items);

        state.income = totalIncome;
        state.outcome = totalOutcome;
        state.percentageProfit = percentageTotalValue;
      }
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
      const updatedItems = state.items.map((e) => {
        if (e.id == action.payload.id) {
          const newItem = action.payload;

          console.log({ ...e, ...newItem });

          return { ...e, ...newItem };
        } else {
          return e;
        }
      });
      state.items = updatedItems;
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
