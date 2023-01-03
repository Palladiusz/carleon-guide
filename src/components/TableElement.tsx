import { useState } from "react";
import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import getImgUrl, { deleteItem, editItem } from "../api";
import { useAppDispatch } from "../hooks";
import { Przedmiot } from "../interfaces";
import {
  calculateProfitInPercentages,
  getFractionColor,
  numberWithSpaces,
} from "../logic";
import { modifyItem, removeItem } from "../store";
import SmallButton from "./SmallButton";

interface ITableElementsProps {
  item: Przedmiot;
}

function TableElement(props: ITableElementsProps) {
  const { name, buy, sell, tier, enchant, id, fraction, quantity } = props.item;
  const [isEdit, setIsEdit] = useState(false);
  const [editValues, setEditValues] = useState({ name, buy, sell, quantity });
  const dispatch = useAppDispatch();

  function handleEditSubmit() {
    const modifiedItem = { ...props.item, ...editValues };
    dispatch(modifyItem({ item: modifiedItem }));
    editItem(modifiedItem);
  }

  return (
    <tr
      key={id}
      className={`border border-gray-500 border-spacing-1 ${getFractionColor(
        fraction
      )} text-white`}
    >
      <th className="w-24 h-20">
        <div>
          {isEdit ? (
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={editValues.quantity}
              onChange={(e) => {
                setEditValues({
                  ...editValues,
                  quantity: parseInt(e.target.value),
                });
              }}
              className="w-full bg-orange-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          ) : (
            quantity
          )}
        </div>
      </th>
      <td className="w-24">
        <img
          src={getImgUrl({ name, tier, enchant })}
          alt="new"
          className="w-24"
        />
      </td>
      <td className="w-24 h-20 text-center">
        {isEdit ? (
          <input
            type="text"
            placeholder="Item name"
            name="name"
            value={editValues.name}
            onChange={(e) => {
              setEditValues({ ...editValues, name: e.target.value });
            }}
            className="w-full bg-orange-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        ) : (
          name
        )}
      </td>
      <td className="w-24 h-20  text-center">
        {isEdit ? (
          <input
            type="number"
            placeholder="Buy price"
            name="buy"
            value={editValues.buy}
            onChange={(e) => {
              setEditValues({ ...editValues, buy: parseInt(e.target.value) });
            }}
            className="w-full bg-orange-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        ) : (
          numberWithSpaces(buy)
        )}
      </td>
      <td className="w-24 h-20  text-center">
        {isEdit ? (
          <input
            type="number"
            placeholder="Sell price"
            name="sell"
            value={editValues.sell}
            onChange={(e) => {
              setEditValues({ ...editValues, sell: parseInt(e.target.value) });
            }}
            className="w-full bg-orange-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        ) : (
          numberWithSpaces(sell)
        )}
      </td>
      <td className="w-24 h-20  text-center">{numberWithSpaces(sell - buy)}</td>
      <td className="w-24 h-20  text-center">
        {calculateProfitInPercentages(buy, sell)}
      </td>
      <td className="w-24 h-20  text-center">{tier}</td>
      <td className="w-24 h-20  text-center">{enchant}</td>
      <td className="w-24 h-20  text-center flex items-center justify-center mt-3">
        {isEdit ? (
          <SmallButton
            children={<FaCheck />}
            handleClick={() => {
              handleEditSubmit();
              setIsEdit(false);
            }}
          />
        ) : (
          <SmallButton
            children={<FaEdit />}
            handleClick={() => {
              setIsEdit(true);
            }}
          />
        )}

        <SmallButton
          children={<FaTrashAlt />}
          handleClick={() => {
            deleteItem(id);
            dispatch(removeItem({ id: id }));
          }}
        />
      </td>
    </tr>
  );
}

export default TableElement;
