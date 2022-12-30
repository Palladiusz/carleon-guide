import ItemNameInput from "./Form/ItemNameInput";
import { Styles } from "../tailwindStyles";
import BuyInput from "./Form/BuyInput";
import SellInput from "./Form/SellInput";
import { useAppSelector } from "../hooks";
import { numberWithSpaces } from "../logic";

export const Cart = () => {
  const itemsSlice = useAppSelector((state) => state.items);

  return (
    <section className="m-5 ">
      <div className="flex items-center justify-center">
        <table className="table-fixed border border-black  rounded-lg shadow-xl">
          <thead>
            <tr>
              <th className={Styles.table.tableHeaderStart}>Total outcome</th>
              <th className={Styles.table.tableHeader}>Total income</th>
              <th className={Styles.table.tableHeaderEnd}>Percentage income</th>
            </tr>
          </thead>
          <tbody className="bg-orange-600">
            <tr>
              <td className="px-4 py-3 text-center text-white">
                {numberWithSpaces(itemsSlice.outcome)}
              </td>
              <td className="px-4 py-3 text-center text-white">
                {numberWithSpaces(itemsSlice.income)}
              </td>
              <td className="px-4 py-3 text-center text-white">
                {itemsSlice.percentageProfit}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
