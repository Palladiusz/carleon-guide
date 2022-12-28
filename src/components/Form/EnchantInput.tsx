import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "../../hooks";
import { changeEnchant } from "../../store";

function EnchantInput() {
  const dispatch = useAppDispatch();

  const [starCount, setStarCount] = useState(0);

  function handleStarClick(starValue: number) {
    if (starCount === 1 && starValue === 1) {
      setStarCount(0);
      dispatch(changeEnchant(0));
    } else {
      setStarCount(starValue);
      dispatch(changeEnchant(starValue));
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
