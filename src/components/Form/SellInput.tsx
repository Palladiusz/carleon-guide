import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeSell } from "../../store";

function BuySellInput() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeSell(parseInt(event.target.value)));
    console.log(event.target.value);
  }
  return (
    <div>
      <input
        type="number"
        placeholder="Cena sprzedaży"
        name="sell"
        value={form.sell}
        onChange={handleValueChange}
        className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default BuySellInput;
