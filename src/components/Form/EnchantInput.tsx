import React, { useState } from "react";

interface IFormProps {
  handleChange: (value: number) => void;
}

function EnchantInput(props: IFormProps) {
  const [starsCount, setStarsCount] = useState<number>(0);

  return (
    <div>
      <div>
        <select
          name="tier"
          value={starsCount}
          onChange={(e) => setStarsCount(parseInt(e.target.value))}
          itemType="number"
          className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value={1} className="bg-gray-800">
            1
          </option>
          <option value={2} className="bg-gray-800">
            2
          </option>
          <option value={3} className="bg-gray-800">
            3
          </option>
          <option value={4} className="bg-gray-800">
            4
          </option>
        </select>
      </div>
    </div>
  );
}

export default EnchantInput;
