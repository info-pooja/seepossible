import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store/index";
import history from "./history";
import "antd/dist/antd.css";
import { isAuthenticated } from "./utils";
import { Helmet } from "react-helmet";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import { publicRoutes, routes } from "./routes";
import "./assets/sass/app.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App history={history}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                !isAuthenticated() ? (
                  <>
                    <Helmet>
                      <title>{"Sign In"}</title>
                    </Helmet>
                    <SignIn history={history} />
                  </>
                ) : (
                  <Navigate replace to="/dashboard" />
                )
              }
            />
            {publicRoutes.map(({ path, Component, title }, key) => (
              <Route
                exact
                path={path}
                element={
                  !isAuthenticated() ? (
                    <>
                      {title && (
                        <Helmet>
                          <title>{title}</title>
                        </Helmet>
                      )}
                      <Component history={history} />
                    </>
                  ) : (
                    <Navigate replace to="/dashboard" />
                  )
                }
                key={key}
              />
            ))}
            {routes.map(({ path, Component, title }, key) => (
              <Route
                exact
                path={path}
                element={
                  isAuthenticated() ? (
                    <>
                      {title && (
                        <Helmet>
                          <title>{title}</title>
                        </Helmet>
                      )}
                      <Component history={history} />
                    </>
                  ) : (
                    <Navigate replace to="/signin" />
                  )
                }
                key={key}
              />
            ))}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
