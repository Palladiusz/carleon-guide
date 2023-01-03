import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeTier } from "../../store";

function TierInput() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);

  function handleTierChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(changeTier({ tier: parseInt(event.target.value) }));
  }

  return (
    <div>
      <div>
        <select
          name="tier"
          onChange={handleTierChange}
          itemType="number"
          value={form.tier}
          className="w-full bg-orange-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value={2} className="bg-gray-800">
            2
          </option>
          <option value={3} className="bg-gray-800">
            3
          </option>
          <option value={4} className="bg-gray-800">
            4
          </option>
          <option value={5} className="bg-gray-800">
            5
          </option>
          <option value={6} className="bg-gray-800">
            6
          </option>
          <option value={7} className="bg-gray-800">
            7
          </option>
          <option value={8} className="bg-gray-800">
            8
          </option>
        </select>
      </div>
    </div>
  );
}

export default TierInput;
