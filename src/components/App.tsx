import { useAppDispatch, useAppSelector } from "../hooks";
import { Przedmiot } from "../interfaces";
import { addItem, resetForm, setItems } from "../store";
import { Form } from "./Form";
import { Header } from "./Header";
import { ItemsTable } from "./ItemsTable";
import { fetchItems, writeItem } from "../api";
import { useEffect, useState } from "react";
import { Cart } from "./Cart";
import SmallButton from "./SmallButton";
import { FaPlus, FaShoppingCart } from "react-icons/fa";

function App() {
  const form = useAppSelector((state) => state.form);
  const fetchedData = fetchItems();
  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const data = fetchItems();
    dispatch(setItems(data));

    setTimeout(function () {
      console.log(data);
    }, 5000);

    console.log(data);
  }, []);

  function handleSubmitItem(item: Przedmiot) {
    // const savedItem = writeItem({
    //   name: form.name,
    //   buy: form.buy,
    //   sell: form.sell,
    //   enchant: form.enchant,
    //   id: "uytg76ty",
    //   tier: form.tier,
    //   fraction: form.fraction,
    //   quantity: 0,
    // });
    // if (savedItem != null) {
    //   dispatch(
    //     addItem({
    //       name: savedItem.name,
    //       buy: savedItem.buy,
    //       sell: savedItem.sell,
    //       enchant: savedItem.enchant,
    //       id: savedItem.id,
    //       tier: savedItem.tier,
    //       fraction: savedItem.fraction,
    //       quantity: savedItem.quantity,
    //     })
    //   );
    //   dispatch(resetForm());
    // }
    // const data = fetchItems();
    // dispatch(setItems(data));
    console.log(items.outcome);
    console.log(items.income);
    console.log(items.percentageProfit);
  }

  return (
    <div className="bg-gray-700 bg-cover">
      <Header />

      <div className="relative">
        {showForm ? <Form onSubmit={handleSubmitItem} /> : <Cart />}{" "}
        <div className="absolute inset-y-0 right-0">
          <SmallButton
            handleClick={() => {
              setShowForm(true);
            }}
            children={<FaPlus />}
          />
          <SmallButton
            handleClick={() => {
              setShowForm(false);
            }}
            children={<FaShoppingCart />}
          />
        </div>
      </div>

      <ItemsTable items={items.items} />
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
