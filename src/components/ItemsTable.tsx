import getImgUrl from "../api";
import { Item } from "../interfaces";
import { calculateProfitInPercentages } from "../logic";
import { Styles } from "../tailwindStyles";

interface IItemsTableProps {
  items: Item[];
}

export function ItemsTable(itemsProps: IItemsTableProps): JSX.Element {
  const formattedItems = itemsProps.items.map(
    ({ name, buy, sell, tier, enchant }, index) => {
      return (
        <tr key={index} className="border border-gray-500 border-spacing-1 ">
          <th className="w-24 h-20">{index}</th>
          <td className="w-24">
            <img
              src={getImgUrl({ name, tier, enchant })}
              alt="new"
              className="w-24"
            />
          </td>
          <td className="w-24 h-20 text-center">{name}</td>
          <td className="w-24 h-20  text-center">{buy}</td>
          <td className="w-24 h-20  text-center">{sell}</td>
          <td className="w-24 h-20  text-center">{sell - buy}</td>
          <td className="w-24 h-20  text-center">
            {calculateProfitInPercentages(buy, sell)}
          </td>
          <td className="w-24 h-20  text-center">{tier}</td>
          <td className="w-24 h-20  text-center">{enchant}</td>
        </tr>
      );
    }
  );

  return (
    <section className="flex items-center justify-center">
      <div>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className={Styles.table.tableHeaderStart}>Num</th>
              <th className={Styles.table.tableHeader}>Obraz</th>
              <th className={Styles.table.tableHeader}>Nazwa przedmiotu</th>
              <th className={Styles.table.tableHeader}>Cena kupna</th>
              <th className={Styles.table.tableHeader}>Cena sprzedaży</th>
              <th className={Styles.table.tableHeader}>Zysk</th>
              <th className={Styles.table.tableHeader}>Zysk w %</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.TableHeaderEnd}>Zaklinanie</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th className={Styles.table.tableHeaderStart}>Num</th>
              <th className={Styles.table.tableHeader}>Obraz</th>
              <th className={Styles.table.tableHeader}>Nazwa przedmiotu</th>
              <th className={Styles.table.tableHeader}>Cena kupna</th>
              <th className={Styles.table.tableHeader}>Cena sprzedaży</th>
              <th className={Styles.table.tableHeader}>Zysk</th>
              <th className={Styles.table.tableHeader}>Zysk w %</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.TableHeaderEnd}>Zaklinanie</th>
            </tr>
          </tfoot>
          <tbody> {formattedItems} </tbody>
        </table>
      </div>
    </section>
  );
}
