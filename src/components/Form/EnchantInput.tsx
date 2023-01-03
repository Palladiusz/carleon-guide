import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeEnchant } from "../../store";

function EnchantInput() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form);
  const starCount = form.enchant;

  function handleStarClick(starValue: number) {
    if (starCount === 1 && starValue === 1) {
      dispatch(changeEnchant({ enchant: 0 }));
    } else {
      dispatch(changeEnchant({ enchant: starValue }));
    }
  }

  return (
    <div className="flex flex-row mt-2">
      <button onClick={() => handleStarClick(1)}>
        <FaStar color={starCount >= 1 ? "yellow" : "gray"} />
      </button>
      <button onClick={() => handleStarClick(2)}>
        <FaStar color={starCount >= 2 ? "yellow" : "gray"} />
      </button>
      <button onClick={() => handleStarClick(3)}>
        <FaStar color={starCount >= 3 ? "yellow" : "gray"} />
      </button>
      <button onClick={() => handleStarClick(4)}>
        <FaStar color={starCount === 4 ? "yellow" : "gray"} />
      </button>
    </div>
  );
}
export default EnchantInput;
