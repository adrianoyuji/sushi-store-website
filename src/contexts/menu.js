import React, { createContext, useState, useEffect } from "react";
import Loading from "../pages/Loading";
import getMenu from "../services/firebaseService";

export const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function loadMenu() {
      try {
        setMenu(getMenu(setLoading));
      } catch (err) {
        console.log(err);
      }
    }
    loadMenu();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};
