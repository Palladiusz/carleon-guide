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
                Quantity
                <button
                  onClick={() => {
                    dispatch(resetQuantity());
                  }}
                >
                  <FaRedoAlt className="ml-2 mt-1" />
                </button>
              </th>
              <th className={Styles.table.tableHeader}>Image</th>
              <th className={Styles.table.tableHeader}>Item name</th>
              <th className={Styles.table.tableHeader}>Buy price</th>
              <th className={Styles.table.tableHeader}>Sell price</th>
              <th className={Styles.table.tableHeader}>Income</th>
              <th className={Styles.table.tableHeader}>Income in %</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.tableHeaderEnd}>Enchantment</th>
              <th className={Styles.table.tableHeaderEnd}>Options</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th className={Styles.table.tableHeaderStart}>Quantity</th>
              <th className={Styles.table.tableHeader}>Image</th>
              <th className={Styles.table.tableHeader}>Item name</th>
              <th className={Styles.table.tableHeader}>Buy price</th>
              <th className={Styles.table.tableHeader}>Sell price</th>
              <th className={Styles.table.tableHeader}>Income</th>
              <th className={Styles.table.tableHeader}>Income in %</th>
              <th className={Styles.table.tableHeader}>Tier</th>
              <th className={Styles.table.tableHeaderEnd}>Enchantment</th>
              <th className={Styles.table.tableHeaderEnd}>Options</th>
            </tr>
          </tfoot>
          <tbody> {formattedItems} </tbody>
        </table>
      </div>
    </section>
  );
}
