import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { resetQuantityInApi } from "../../api";
import { Przedmiot } from "../../interfaces";
import { initialCalculations } from "../../logic";

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
    changeSearchTerm: (state, action: { payload: { searchTerm: string } }) => {
      return { ...state, searchTerm: action.payload.searchTerm };
    },
    setItems: (state, action: { payload: { items: Przedmiot[] } }) => {
      if (state.items.length > 0) {
        const {
          totalIncome,
          totalOutcome,
          percentageTotalValue,
        } = initialCalculations(state.items);

        return {
          ...state,
          income: totalIncome,
          outcome: totalOutcome,
          percentageProfit: percentageTotalValue,
          items: action.payload.items,
        };
      }
      return { ...state, items: action.payload.items };
    },
    addItem: (state, action: { payload: { newItem: Przedmiot } }) => {
      state.items.push(action.payload.newItem);
    },
    removeItem: (state, action: { payload: { id: string } }) => {
      const updated = state.items.filter((e) => {
        return e.id !== action.payload.id;
      });

      return { ...state, items: updated };
    },
    modifyItem: (state, action: { payload: { item: Przedmiot } }) => {
      const updatedItems = state.items.map((e) => {
        if (e.id === action.payload.item.id) {
          const newItem = action.payload.item;

          return { ...e, ...newItem };
        } else {
          return e;
        }
      });

      const {
        totalIncome,
        totalOutcome,
        percentageTotalValue,
      } = initialCalculations(updatedItems);

      return {
        ...state,
        income: totalIncome,
        outcome: totalOutcome,
        percentageProfit: percentageTotalValue,
        items: updatedItems,
      };
    },
    resetQuantity: (state) => {
      const itemIdsNeedToUpdate = state.items.map((item) => {
        if (item.quantity !== 0) {
          return item.id;
        }
      });

      const updatedItems = state.items.map((item: Przedmiot) => {
        if (itemIdsNeedToUpdate.includes(item.id)) {
          return { ...item, quantity: 0 };
        } else {
          return item;
        }
      });

      const {
        totalIncome,
        totalOutcome,
        percentageTotalValue,
      } = initialCalculations(updatedItems);

      const onlyResettedItems = updatedItems.filter((item) =>
        itemIdsNeedToUpdate.includes(item.id)
      );

      resetQuantityInApi(onlyResettedItems);

      return {
        ...state,
        income: totalIncome,
        outcome: totalOutcome,
        percentageProfit: percentageTotalValue,
        items: updatedItems,
      };
    },
  },
});

export const {
  changeSearchTerm,
  addItem,
  removeItem,
  modifyItem,
  setItems,
  resetQuantity,
} = itemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.items;

export default itemsSlice;
