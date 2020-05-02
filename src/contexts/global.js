import React, { createContext, useState, useEffect } from "react";
import Loading from "../pages/Loading";
import getMenu from "../services/firebaseService";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

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
    <GlobalContext.Provider value={{ menu, cart, setCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
