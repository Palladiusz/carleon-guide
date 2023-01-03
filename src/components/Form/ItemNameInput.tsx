import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeName } from "../../store";

function ItemNameInput() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeName({ name: event.target.value }));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Item name"
        name="name"
        value={form.name}
        onChange={handleNameChange}
        className="w-full bg-orange-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default ItemNameInput;
