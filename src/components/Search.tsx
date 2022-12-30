import { useAppDispatch, useAppSelector } from "../hooks";
import { changeSearchTerm } from "../store";

export const Search = () => {
  const itemsSlice = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={itemsSlice.searchTerm}
        onChange={(e) => {
          dispatch(changeSearchTerm(e.target.value));
        }}
        className="w-80 bg-orange-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};
