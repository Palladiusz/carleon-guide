import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Fraction } from "../../interfaces";
import { changeFraction } from "../../store";

function FractionInput() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);
  const fraction = form.fraction;

  function handleFractionChange(newFraction: Fraction) {
    dispatch(changeFraction({ fraction: newFraction }));
  }
  return (
    <div className="p-1">
      <button
        onClick={() => handleFractionChange(Fraction.TF)}
        className={`hover:p-1 w-5 h-5 rounded-full bg-purple-600 ${
          fraction === Fraction.TF && " border-2 border-yellow-400 p-3"
        }`}
      ></button>
      <button
        onClick={() => handleFractionChange(Fraction.BW)}
        className={`hover:p-1 w-5 h-5 rounded-full bg-orange-600 ${
          fraction === Fraction.BW && " border-2 border-yellow-400 p-3"
        }`}
      ></button>
      <button
        onClick={() => handleFractionChange(Fraction.FS)}
        className={`hover:p-1 w-5 h-5 rounded-full bg-gray-200 ${
          fraction === Fraction.FS && " border-2 border-yellow-400 p-3"
        }`}
      ></button>
      <button
        onClick={() => handleFractionChange(Fraction.LYM)}
        className={`hover:p-1 w-5 h-5 rounded-full bg-green-600 ${
          fraction === Fraction.LYM && " border-2 border-yellow-400 p-3"
        }`}
      ></button>
      <button
        onClick={() => handleFractionChange(Fraction.ML)}
        className={`hover:p-1 w-5 h-5 rounded-full bg-blue-600 ${
          fraction === Fraction.ML && " border-2 border-yellow-400 p-3"
        }`}
      ></button>
    </div>
  );
}

export default FractionInput;
