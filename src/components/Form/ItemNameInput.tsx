import React from "react";

interface IFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ItemNameInput(props: IFormProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Nazwa przedmiotu"
        name="name"
        onChange={props.handleChange}
        className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default ItemNameInput;
