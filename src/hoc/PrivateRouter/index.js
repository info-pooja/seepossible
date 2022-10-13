import { Navigate, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { routes } from "../../routes";
import { isAuthenticated } from "../../utils";

const PrivateRouter = () => {
  return routes.map(({ path, Component, title }, key) => (
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
            <Component />
          </>
        ) : (
          <Navigate replace to="/signin" />
        )
      }
      key={key}
    />
  ));
};

export default PrivateRouter;
