import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomTable from "../../component/CustomTable";
import store from "../../redux/Store";

const Home = ({ history }) => {
  const [tableData, setTableData] = useState([]);
  const products = useSelector((state) => state.ProductModel).products;
  const { dispatch } = store;

  useEffect(() => {
    dispatch.ProductModel.getProduct();
  }, []);

  useEffect(() => {
    console.log("products", products);
    setTableData([...products]);
  }, [products]);

  const handleAddCart = (data) => {
    dispatch.CartModel.addProductToCart(data);
  };

  return (
    <CustomTable
      tableData={tableData}
      tab="dashboard"
      handleClick={handleAddCart}
    />
  );
};

export default Home;
