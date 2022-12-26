import { useAppDispatch, useAppSelector } from "../hooks";
import { Item } from "../interfaces";
import { addItem } from "../store";
import { Form } from "./Form";
import { Header } from "./Header";
import { ItemsTable } from "./ItemsTable";

function App() {
  function handleSubmitItem(item: Item) {
    dispatch(addItem({ ...item, id: `${Math.random()}` }));
    console.log(item);
  }

  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-blue-400 h-screen">
      <Header />

      <Form onSubmit={handleSubmitItem} />

      <ItemsTable items={items} />
      <div>
        <h2 className="text-slate-200">Kot</h2>
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="new"
          className="w-100"
        />
      </div>
    </div>
  );
}

export default App;
