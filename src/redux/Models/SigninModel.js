import Cookies from "universal-cookie";
import axiosClient from "../../api/axiosClient";

const cookies = new Cookies();

const SigninModel = {
  state: {},
  reducers: {
    // handle state changes with pure functions
    setUserDetails(state, payload) {
      return { ...payload };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async logInUser(payload) {
      const { data, history, handleOpenModal, setLoading } = payload;
      axiosClient
        .post("/login", data)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            const { token } = res.data;
            this.setUserDetails(res.data);
            localStorage.setItem(`userDetails`, JSON.stringify(res.data));
            var d = new Date(Date.now() + 12 * (60 * 60 * 1000));
            cookies.set(`access_token`, token, {
              path: "/",
              expires: d,
              secure: true,
              sameSite: "strict",
            });
            history.push("/dashboard");
          } else {
            dispatch.ErrorModel.handleErrorPop({
              header: "",
              subHeader: "Email doesn’t exist",
              className: "signpage_modal exist_email",
              subHeader: data.email,
              body: "We are unable to locate this email in our database. Please check your credentials and try again.",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          dispatch.ErrorModel.handleErrorPop({
            header: "Email doesn’t exist",
            className: "signpage_modal exist_email",
            subHeader: data.email,
            body: "We are unable to locate this email in our database. Please check your credentials and try again.",
          });
        });
    },
  }),
};

export default SigninModel;
