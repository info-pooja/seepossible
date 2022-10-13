import { Form } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomInput from "../../component/CustomInput";
import FilledButton from "../../component/FilledButton";
import CustomModal from "../../hoc/CustomModal";
import store from "../../redux/Store";
import PopComponent from "../popContent";

const SignIn = ({ history }) => {
  const [error, setError] = useState({});
  const [modalName, setModalName] = useState("ErrorPop");
  let Modal = PopComponent[modalName];
  const [modalOpen, setModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState({ password: false });
  const [formData, setFormData] = useState({});
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { dispatch } = store;

  const rules = {
    email: [
      {
        validator: (_, value) => {
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!value) {
            return Promise.reject("Please enter your email");
          } else if (!re.test(String(value).toLowerCase())) {
            return Promise.reject("Please enter a valid email");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
    password: [
      {
        validator: (_, value) => {
          const re =
            /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{5,}$/;
          if (!value) {
            return Promise.reject("Please enter your password");
          } else if (!re.test(value)) {
            return Promise.reject("Not a valid password");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
  };

  const handleOpenModal = (type, data) => {
    let flag = 0;
    switch (type) {
      case "ErrorPop": {
        setModalName(type);
        setError(data);
        setModalOpen(true);
        break;
      }
      default: {
        setModalName(type);
        setModalOpen(!modalOpen);
        break;
      }
    }
    if (flag === 1) {
      setModalName(type);
      setModalOpen(!modalOpen);
    }
  };

  const handleShow = (type) => {
    setShowPassword({ ...showPassword, [type]: !showPassword[type] });
  };

  const onFinish = (data) => {
    setLoading(true);
    dispatch.SigninModel.logInUser({
      data,
      history,
      handleOpenModal,
      setLoading,
    });
  };

  return (
    <div className="page_wrapper">
      <div className="signin">
        <div className="container">
          <div className="row">
            <div className="col-12 signin signUp">
              <div style={{ textAlign: "right" }}>
                <NavLink to={"/signup"}>signup</NavLink>
              </div>
            </div>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              onFinishFailed={(err) => {
                console.log(`err`, err);
              }}
              scrollToFirstError
              initialValues={formData}
            >
              <h2>SIGN IN</h2>
              <Form.Item
                name="username"
                // rules={rules.username}
                className="form_group"
              >
                <CustomInput
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={() => {}}
                  inputClass="form_control"
                />
              </Form.Item>
              <div className="mail_box">
                <Form.Item
                  name="password"
                  rules={rules.password}
                  className="form_item form_group"
                >
                  <CustomInput
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={() => {}}
                    className="password"
                    inputClass="form_control"
                    pass_eye="grideye"
                    handleShow={handleShow}
                    showPassword={showPassword}
                  />
                </Form.Item>
                <div className="form_group pt_1 pb_2">
                  <button
                    type="reset"
                    onClick={() => {}}
                    className="btn btn_gray"
                  >
                    clear
                  </button>
                  <FilledButton
                    loading={false}
                    type="submit"
                    value="submit"
                    className="btn_primary ml_1"
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {Modal && (
        <CustomModal
          open={modalOpen}
          handleOpen={handleOpenModal}
          resetPass="resetPass"
        >
          <Modal
            loading={loading}
            error={error}
            handleOpenModal={handleOpenModal}
          />
        </CustomModal>
      )}
    </div>
  );
};

export default SignIn;
