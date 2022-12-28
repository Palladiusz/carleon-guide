import React, { useState } from "react";
import { Item } from "../interfaces";
import BuySellInput from "./Form/BuyInput";
import EnchantInput from "./Form/EnchantInput";
import ItemNameInput from "./Form/ItemNameInput";
import TierInput from "./Form/TierInput";
import { Styles } from "../tailwindStyles";
import BuyInput from "./Form/BuyInput";
import SellInput from "./Form/SellInput";

interface IFormProps {
  onSubmit: (item: Item) => void;
}

export const Form = (props: IFormProps) => {
  const [item, setItem] = useState<Item>({
    id: "uyg76",
    name: "",
    buy: 0,
    sell: 0,
    tier: 1,
    enchant: 4,
  });

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setItem({
      ...item,
      [name]: value,
    });
  }

  function handleEnchantChange(value: number) {
    setItem({ ...item, enchant: value });
  }

  return (
    <section className="m-5 ">
      <div className="flex items-center justify-center">
        <table className="table-fixed border border-black  rounded-lg shadow-xl">
          <thead>
            <tr>
              <th className={Styles.table.tableHeaderStart}>
                Nazwa przedmiotu
              </th>
              <th className={Styles.table.tableHeader}>Cena kupna</th>
              <th className={Styles.table.tableHeader}>Cena sprzedaży</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.tableHeader}>Zaklinanie</th>
              <th className={Styles.table.TableHeaderEnd}>Dodaj</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">
                <ItemNameInput />
              </td>
              <td className="px-4 py-3">
                <BuyInput />
              </td>
              <td className="px-4 py-3">
                <SellInput />
              </td>
              <td className="px-4 py-3">
                <TierInput />
              </td>
              <td className="px-4 py-3 relative top-1  flex justify-center">
                <EnchantInput handleChange={handleEnchantChange} />
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => {
                    props.onSubmit(item);
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
