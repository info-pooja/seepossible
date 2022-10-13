import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CustomTable = ({ tableData, handleClick, tab }) => {
  const cart = useSelector((state) => state.CartModel).products;

  return (
    <div className="table_wrapper">
      <div style={{ textAlign: "left", marginLeft: "30px" }}>
        {tab === "dashboard" ? <p>{`Cart (${cart.length})`}</p> : ""}
        {tab === "cart" ? (
          <NavLink to={"/dashboard"}>{`Go to ${
            tab === "cart" ? "Dashboard" : "Cart"
          }`}</NavLink>
        ) : (
          <NavLink to={"/cart"}>{`Go to ${
            tab === "cart" ? "Dashboard" : "Cart"
          }`}</NavLink>
        )}
      </div>
      <div className="table_responsive vert_scroll">
        <table
          className={`table`}
          width={1000}
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Option</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!tableData?.length ? (
              <div>No data found</div>
            ) : (
              tableData?.map((_) => (
                <tr style={{ padding: "10px" }}>
                  <td>{_.title}</td>
                  <td style={{ padding: "5px" }}>
                    <img
                      style={{ width: "100px" }}
                      src={_.thumbnail}
                      alt={_.title}
                    />
                  </td>
                  <td>{_.category}</td>
                  <td>{_.price}</td>
                  <td>
                    <button onClick={() => handleClick(_.id)}>Remove</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
