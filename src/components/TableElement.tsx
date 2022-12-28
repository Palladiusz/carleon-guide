import getImgUrl from "../api";
import { Przedmiot } from "../interfaces";
import { calculateProfitInPercentages } from "../logic";

interface ITableElementsProps {
  item: Przedmiot;
}

function TableElement(props: ITableElementsProps) {
  const { name, buy, sell, tier, enchant, id } = props.item;
  return (
    <tr
      key={id}
      className="border border-gray-500 border-spacing-1 bg-purple-700"
    >
      <th className="w-24 h-20">{id}</th>
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

export default TableElement;
