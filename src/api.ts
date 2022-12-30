import { onValue, push, ref, remove, set } from "firebase/database";
import { Przedmiot } from "./interfaces";
import { convertTierToName } from "./logic";
import { auth, database } from "./utils/firebase";

interface IGetImgUrlProps {
  name: string;
  tier: number;
  enchant: number;
}

const getImgUrl = (props: IGetImgUrlProps) => {
  const { name, tier, enchant } = props;
  const numberTier = Number(tier);

  const basicUrl = "https://render.albiononline.com/v1/item/";

  const fullUrl = `${basicUrl}${convertTierToName(
    numberTier
  )} ${name}@${enchant}?&quality=2`;

  return fullUrl;
};

export default getImgUrl;

const fetchItems = () => {
  var userId = auth.currentUser?.uid;
  var items = <Przedmiot[]>[];

  onValue(ref(database, `${userId}`), (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val().items;
      const values = Object.keys(data).map((key) => data[key]);
      items = values.map((element: Przedmiot) => element);
      console.log(typeof items[0].buy);
      console.log(typeof items[0].sell);
    } else {
      console.log("snapshot nie trybi");
    }
  });

  return items;
};

function writeItem(item: Przedmiot) {
  const userId = auth.currentUser?.uid;

  if (userId != null) {
    const postListRef = ref(database, userId + "/items");
    const newPostRef = push(postListRef, item);
    set(newPostRef, {
      ...item,
      id: newPostRef.key,
    });

    return <Przedmiot>{ ...item, id: newPostRef.key };
  }
}

function editItem(item: Przedmiot) {
  const userId = auth.currentUser?.uid;

  if (userId != null) {
    const postListRef = ref(database, userId + "/items" + `/${item.id}`);

    set(postListRef, {
      ...item,
    });
  }
}

function deleteItem(itemId: string) {
  const userId = auth.currentUser?.uid;

  if (userId != null) {
    const postListRef = ref(database, userId + "/items" + `/${itemId}`);

    remove(postListRef);
  }
}

export { fetchItems, writeItem, editItem, deleteItem };
