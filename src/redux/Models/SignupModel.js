import axiosClient from "../../api/axiosClient";

const SignupModel = {
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
    async verifyUser(payload) {
      const { token, setFormData, history } = payload;
      axiosClient
        .get(`/cl_get_email_from_token/${token}`)
        .then((res) => {
          if (res.data.status === 200) {
            setFormData((old) => {
              return {
                ...old,
                email: res.data.email,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
              };
            });
          } else if (res.data.status === 400) {
            history.push("/dashboard");
          } else {
            console.log(`res`, res);
          }
        })
        .catch((err) => {
          console.log(`err`, err);
        });
    },
    async registerUser(payload) {
      const { data, setSubmitted } = payload;
      axiosClient
        .post("/register_cl_user", data)
        .then((res) => {
          if (res.data.status === 200) {
            setSubmitted(true);
          } else if (res.data.status === 103) {
            dispatch.ErrorModel.handleErrorPop({
              header: "oops! There is some error in creating your profile",
              body: (
                <>
                  Please contact us at{" "}
                  <a
                    className="pop_email"
                    href="mailto:precollegeonline@usc.edu"
                  >
                    precollegeonline@usc.edu
                  </a>{" "}
                  to help you resolve this issue.
                </>
              ),
              bodyClass: "mb_37",
            });
          } else {
            dispatch.ErrorModel.handleErrorPop({
              header: "Error",
              body: res.data.message,
            });
          }
        })
        .catch((err) => {
          dispatch.ErrorModel.handleErrorPop({
            header: "Error",
            body: err.response.data.message,
          });
        });
    },
  }),
};

export default SignupModel;
