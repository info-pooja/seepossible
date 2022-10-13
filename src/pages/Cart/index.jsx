import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomTable from "../../component/CustomTable";
import store from "../../redux/Store";

const Cart = ({ history }) => {
  const [tableData, setTableData] = useState([]);
  const products = useSelector((state) => state.CartModel).products;
  const { dispatch } = store;

  // useEffect(() => {
  //   dispatch.ProductModel.getProduct();
  // }, []);

  useEffect(() => {
    console.log("products", products);
    setTableData([...products]);
  }, [products]);

  const handleRemoveCart = (id) => {
    dispatch.CartModel.removeProductToCart(id);
  };

  return (
    <CustomTable
      tableData={tableData}
      tab="cart"
      handleClick={handleRemoveCart}
    />
  );
};

export default Cart;
