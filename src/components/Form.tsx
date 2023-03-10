import React, { useState } from "react";
import { Fraction, Przedmiot } from "../interfaces";
import ItemNameInput from "./Form/ItemNameInput";
import TierInput from "./Form/TierInput";
import { Styles } from "../tailwindStyles";
import BuyInput from "./Form/BuyInput";
import SellInput from "./Form/SellInput";
import Button from "./Button";
import EnchantInput from "./Form/EnchantInput";
import FractionInput from "./Form/FractionInput";

interface IFormProps {
  onSubmit: (item: Przedmiot) => void;
}

export const Form = (props: IFormProps) => {
  const [item, setItem] = useState<Przedmiot>({
    id: "uyg76",
    name: "",
    buy: 0,
    sell: 0,
    tier: 1,
    enchant: 4,
    quantity: 0,
    fraction: Fraction.TF,
  });

  return (
    <section className="m-5 ">
      <div className="flex items-center justify-center">
        <table className="table-fixed border border-black  rounded-lg shadow-xl">
          <thead>
            <tr>
              <th className={Styles.table.tableHeaderStart}>Item name</th>
              <th className={Styles.table.tableHeader}>Buy price</th>
              <th className={Styles.table.tableHeader}>Sell price</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.tableHeader}>Enchantment</th>
              <th className={Styles.table.tableHeader}>Fraction</th>
              <th className={Styles.table.tableHeaderEnd}>Add new item</th>
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
                <EnchantInput />
              </td>
              <td className="px-4 py-3">
                <FractionInput />
              </td>

              <td className="px-4 py-3">
                <Button
                  text="Submit"
                  handleClick={() => {
                    props.onSubmit(item);
                  }}
                ></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
