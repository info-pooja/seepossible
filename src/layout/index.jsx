import Header from "./Header";
import Footer from "./Footer";
import React, { Suspense } from "react";
import { isAuthenticated } from "../utils";
import CustomModal from "../hoc/CustomModal";
import ErrorPop from "../PopContent/ErrorPop";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import Cookies from "universal-cookie";

const Layout = ({ children, history }) => {
  const cookies = new Cookies();
  const { dispatch } = store;
  const error = useSelector((state) => state.ErrorModel);

  const handleLogout = () => {
    var d = new Date(Date.now() + 12 * (60 * 60 * 1000));
    cookies.remove(`access_token`, {
      path: "/",
      expires: d,
      secure: true,
      sameSite: "strict",
    });
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="layout">
      <Header
        history={history}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
      <section
        className={isAuthenticated() ? "page_wrapper" : " inner_wrapper"}
      >
        <Suspense fallback={""}>{children}</Suspense>
      </section>
      <Footer />
      <CustomModal
        handleOpen={dispatch.ErrorModel.handleClose}
        open={error.isOpen}
      >
        <ErrorPop
          handleOpenModal={dispatch.ErrorModel.handleClose}
          error={error.error}
        />
      </CustomModal>
    </div>
  );
};

export default Layout;
