import getImgUrl from "../api";
import { Przedmiot } from "../interfaces";
import { calculateProfitInPercentages } from "../logic";
import { Styles } from "../tailwindStyles";
import TableElement from "./TableElement";

interface IItemsTableProps {
  items: Przedmiot[];
}

export function ItemsTable(itemsProps: IItemsTableProps): JSX.Element {
  const formattedItems = itemsProps.items.map((item, index) => {
    return <TableElement item={item} />;
  });

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
              <th className={Styles.table.TableHeaderEnd}>Opcje</th>
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
              <th className={Styles.table.TableHeaderEnd}>Opcje</th>
            </tr>
          </tfoot>
          <tbody> {formattedItems} </tbody>
        </table>
      </div>
    </section>
  );
}
