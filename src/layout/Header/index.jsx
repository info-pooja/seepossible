import { useSelector } from "react-redux";
const Header = ({ isAuthenticated, handleLogout, history }) => {
  const userData = useSelector((state) => state.SigninModel);

  return (
    <>
      <header>
        <div className="main_header">
          <div className="container">
            <div className="row">
              <div className="col-12 top_header">
                <div
                  onClick={() => history.push("/dashboard")}
                  className="content_head cursor_pointer"
                >
                  Logo
                </div>
                {isAuthenticated() ? (
                  <div className="header_menu">
                    <p className="header_wcm_text">
                      welcome, {userData?.firstName} {userData?.lastName}
                    </p>
                    <span className="logout_text">
                      <a onClick={handleLogout}>Log out</a>
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
