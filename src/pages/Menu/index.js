import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import Category from "../../components/Category";
import Product from "../../components/Product";
import { MenuContext } from "../../contexts/menu";
import Spinner from "react-bootstrap/Spinner";

export default function Menu() {
  const { menu } = useContext(MenuContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [fakeLoading, setFakeLoading] = useState(true);
  const categories = getCategories();

  function getCategories() {
    const categories = ["all"];
    menu.forEach((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
    return categories;
  }
  function renderProducts() {
    if (selectedCategory === "all") {
      return (
        <>
          {menu.map((item, index) => (
            <Product item={item} key={index} />
          ))}
        </>
      );
    } else {
      let filteredMenu = menu.filter(
        (item) => item.category === selectedCategory
      );
      return (
        <>
          {filteredMenu.map((item, index) => (
            <Product item={item} key={index} />
          ))}
        </>
      );
    }
  }

  function renderFakeLoading() {
    if (fakeLoading) setTimeout(() => setFakeLoading(false), 250);
    return (
      <div className="fake-loading">
        <Spinner animation="border" role="status" variant="light">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="menu">
      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        setFakeLoading={setFakeLoading}
        categories={categories}
      />
      <div className="food-list" id="food-list">
        {fakeLoading ? renderFakeLoading() : renderProducts()}
      </div>
    </div>
  );
}
