import React, { useState, useEffect } from "react";
import "./styles.css";
import Filters from "../../components/Filters";
import { connect } from "react-redux";

function Menu({ menu, ...props }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000); // 0.5 second
  return (
    <div className="menu">
      <Filters />
      <div className="food-list">
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {menu.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps, {})(Menu);
