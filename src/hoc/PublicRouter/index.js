import { Navigate, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { publicRoutes } from "../../routes";
import { isAuthenticated } from "../../utils";

const PublicRouter = () => {
  return publicRoutes.map(({ path, Component, title }, key) => (
    <>
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
              <Component />
            </>
          ) : (
            <Navigate replace to="/dashboard" />
          )
        }
        key={key}
      />
    </>
  ));
};

export default PublicRouter;
