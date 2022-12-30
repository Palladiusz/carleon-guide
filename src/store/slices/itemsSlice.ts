import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { resetQuantityInDb as resetQuantityInApi } from "../../api";
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

      const {
        totalIncome,
        totalOutcome,
        percentageTotalValue,
      } = initialCalculations(updatedItems);

      state.income = totalIncome;
      state.outcome = totalOutcome;
      state.percentageProfit = percentageTotalValue;
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

      state.items = updatedItems;

      const {
        totalIncome,
        totalOutcome,
        percentageTotalValue,
      } = initialCalculations(updatedItems);

      state.income = totalIncome;
      state.outcome = totalOutcome;
      state.percentageProfit = percentageTotalValue;

      const onlyResettedItems = updatedItems.filter((item) =>
        itemIdsNeedToUpdate.includes(item.id)
      );

      resetQuantityInApi(onlyResettedItems);
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
