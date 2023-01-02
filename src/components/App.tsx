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
import { auth, database } from "../utils/firebase";
import { child, get, onValue, ref } from "firebase/database";
import { FirebaseError } from "firebase/app";
import { getAuth } from "firebase/auth";

function App() {
  const form = useAppSelector((state) => state.form);
  const itemsSlice = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    // Fetch data from firebase on load page
    const dbRef = ref(database);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        get(child(dbRef, `${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val().items;
              const values = Object.keys(data).map((key) => data[key]);
              const items = values.map((element: Przedmiot) => element);
              dispatch(setItems(items));
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.log("error");
      }
    });
  }, []);

  function handleSubmitItem(item: Przedmiot) {
    const savedItem = writeItem({
      name: form.name,
      buy: form.buy,
      sell: form.sell,
      enchant: form.enchant,
      id: "uytg76ty",
      tier: form.tier,
      fraction: form.fraction,
      quantity: 0,
    });
    if (savedItem != null) {
      dispatch(
        addItem({
          name: savedItem.name,
          buy: savedItem.buy,
          sell: savedItem.sell,
          enchant: savedItem.enchant,
          id: savedItem.id,
          tier: savedItem.tier,
          fraction: savedItem.fraction,
          quantity: savedItem.quantity,
        })
      );
      dispatch(resetForm());
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-800  min-h-screen">
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

      <ItemsTable items={itemsSlice.items} />
    </div>
  );
}

export default App;
