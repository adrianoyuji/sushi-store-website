import { firebaseDatabase } from "../utils/firebaseUtils";

export default function getMenu(setLoading) {
  const menu = [];
  firebaseDatabase
    .collection("menu")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => menu.push(doc.data()));
    });

  return menu;
}
