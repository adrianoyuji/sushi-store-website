import React from "react";
import "./styles.css";

export default function Category(props) {
  return (
    <div className="category-box">
      <div className="category-title">CATEGORIES</div>
      <div className="category-buttons">
        {props.categories.map((category, index) => {
          let name = category.replace("-", " ").toUpperCase();
          let style;

          if (props.selectedCategory === category) {
            //changes styles if the button is selected
            style = "category-button category-selected";
          } else {
            style = "category-button";
          }
          return (
            <div
              key={index}
              className={style}
              onClick={() => {
                props.setSelectedCategory(category);
                props.setFakeLoading(true);
              }}
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
