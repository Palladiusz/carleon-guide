import { useAppDispatch, useAppSelector } from "../hooks";
import { Item } from "../interfaces";
import { addItem, resetForm } from "../store";
import { Form } from "./Form";
import { Header } from "./Header";
import { ItemsTable } from "./ItemsTable";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { auth, database } from "../utils/firebase";
import { useSelector } from "react-redux";
import { selectForm } from "../store/slices/formSlice";

function App() {
  const userId = auth.currentUser?.uid;
  const dbRef = ref(getDatabase(), `${userId}`);
  const form = useAppSelector((state) => state.form);

  function readItems() {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val().items;
      const values = Object.keys(data).map((key) => data[key]);
      console.log(values);
    });
  }

  function writeItem(item: Item) {
    const userId = auth.currentUser?.uid;

    if (userId != null) {
      const postListRef = ref(database, userId + "/items");
      const newPostRef = push(postListRef, item);
      set(newPostRef, {
        ...item,
        id: newPostRef.key,
      });
    }
  }

  function editItem(item: Item) {
    const userId = auth.currentUser?.uid;

    if (userId != null) {
      const postListRef = ref(database, userId + "/items" + `/${item.id}`);

      set(postListRef, {
        ...item,
      });
    }
  }

  function deleteItem(item: Item) {
    const userId = auth.currentUser?.uid;

    if (userId != null) {
      const postListRef = ref(database, userId + "/items" + `/${item.id}`);

      remove(postListRef);
    }
  }

  function handleSubmitItem(item: Item) {
    dispatch(
      addItem({
        name: form.name,
        buy: form.buy,
        sell: form.sell,
        enchant: form.enchant,
        id: "uytg76ty",
        tier: form.tier,
      })
    );
    console.log(form);

    dispatch(resetForm());

    // writeItem(item);
    readItems();
  }

  const items = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gray-700 h-screen">
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
