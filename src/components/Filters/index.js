import React from "react";
import "./styles.css";

export default function Filters() {
  return (
    <div className="filter">
      <div className="category">
        <div className="filter-title">CATEGORY</div>
        <select className="filter-select">
          <option value="all">All</option>
          <option value="temaki">Temaki</option>
        </select>
      </div>
      <div className="searchBar">
        <div className="filter-title">SEARCH</div>
        <input
          id="search"
          type="text"
          className="seach-container"
          placeholder="Hot Roll, Sake, Unagi..."
        />
      </div>
    </div>
  );
}
