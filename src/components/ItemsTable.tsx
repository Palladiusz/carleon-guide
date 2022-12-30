import { FaRedoAlt } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Przedmiot } from "../interfaces";
import { resetQuantity } from "../store";
import { Styles } from "../tailwindStyles";
import TableElement from "./TableElement";

interface IItemsTableProps {
  items: Przedmiot[];
}

export function ItemsTable(itemsProps: IItemsTableProps): JSX.Element {
  const itemsSlice = useAppSelector((state) => state.items);
  const filteredItems = itemsProps.items.filter((item) =>
    item.name.toLowerCase().includes(itemsSlice.searchTerm.toLowerCase())
  );
  const dispatch = useAppDispatch();

  const formattedItems = filteredItems.map((item) => {
    return <TableElement item={item} />;
  });

  return (
    <section className="flex items-center justify-center">
      <div>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className={Styles.table.tableHeaderStart}>
                Ilość
                <button
                  onClick={() => {
                    dispatch(resetQuantity());
                  }}
                >
                  <FaRedoAlt className="ml-2 mt-1" />
                </button>
              </th>
              <th className={Styles.table.tableHeader}>Obraz</th>
              <th className={Styles.table.tableHeader}>Nazwa przedmiotu</th>
              <th className={Styles.table.tableHeader}>Cena kupna</th>
              <th className={Styles.table.tableHeader}>Cena sprzedaży</th>
              <th className={Styles.table.tableHeader}>Zysk</th>
              <th className={Styles.table.tableHeader}>Zysk w %</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.tableHeaderEnd}>Zaklinanie</th>
              <th className={Styles.table.tableHeaderEnd}>Opcje</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th className={Styles.table.tableHeaderStart}>Ilość</th>
              <th className={Styles.table.tableHeader}>Obraz</th>
              <th className={Styles.table.tableHeader}>Nazwa przedmiotu</th>
              <th className={Styles.table.tableHeader}>Cena kupna</th>
              <th className={Styles.table.tableHeader}>Cena sprzedaży</th>
              <th className={Styles.table.tableHeader}>Zysk</th>
              <th className={Styles.table.tableHeader}>Zysk w %</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.tableHeaderEnd}>Zaklinanie</th>
              <th className={Styles.table.tableHeaderEnd}>Opcje</th>
            </tr>
          </tfoot>
          <tbody> {formattedItems} </tbody>
        </table>
      </div>
    </section>
  );
}
