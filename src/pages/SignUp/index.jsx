import { Form, Input, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CustomInput from "../../component/CustomInput";
import FilledButton from "../../component/FilledButton";
const { Option } = Select;

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [cities, setcities] = useState({});
  const [states, setstates] = useState({});
  const [countries, setcountries] = useState({});

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        setcountries(json.data.map((_) => _.name));
      });
    fetch("https://countriesnow.space/api/v0.1/countries/states", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        country: formData.country,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setstates(json.data);
      });
    fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        country: formData.country,
        state: formData.state,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setcities(json.data);
      });
  }, []);

  const rules = {
    fname: [
      {
        validator: (_, value) => {
          if (!value) {
            return Promise.reject("Please enter your first name");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
    lname: [
      {
        validator: (_, value) => {
          if (!value) {
            return Promise.reject("Please enter your last name");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
    gender: [
      {
        validator: (_, value) => {
          if (!value) {
            return Promise.reject("Please enter your gender");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
    state: [
      {
        validator: (_, value) => {
          if (!value) {
            return Promise.reject("Please enter your state");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
    city: [
      {
        validator: (_, value) => {
          if (!value) {
            return Promise.reject("Please enter your city");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
    country: [
      {
        validator: (_, value) => {
          if (!value) {
            return Promise.reject("Please enter your country");
          } else {
            return Promise.resolve();
          }
        },
      },
    ],
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
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="page_wrapper">
      <div className="signin">
        <div className="container">
          <div style={{ textAlign: "right" }}>
            <NavLink to={"/"}>signin</NavLink>
          </div>
          <div className="row">
            <Form
              name="register"
              onFinishFailed={(err) => console.log(`err`, err)}
              scrollToFirstError
              initialValues={{}}
            >
              <h2>SIGN UP</h2>
              <Form.Item
                name="email"
                rules={rules.email}
                className="form_group"
              >
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  inputClass="form_control"
                />
              </Form.Item>
              <Form.Item
                name="first_name"
                rules={rules.fname}
                className="form_group"
              >
                <CustomInput
                  label="First Name"
                  name="first_name"
                  value={formData.first_name}
                  inputClass="form_control"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                name="last_name"
                rules={rules.lname}
                className="form_group"
              >
                <CustomInput
                  label="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  inputClass="form_control"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                name="state"
                rules={rules.state}
                className="form_group"
              >
                <Select
                  // defaultValue="lucy"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  {states.length
                    ? states?.map((_) => <Option value={_}>{_}</Option>)
                    : ""}
                </Select>
              </Form.Item>
              <Form.Item name="city" rules={rules.city} className="form_group">
                <Select
                  // defaultValue="lucy"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  {cities.length
                    ? cities?.map((_) => <Option value={_}>{_}</Option>)
                    : ""}
                </Select>
              </Form.Item>
              <Form.Item
                name="country"
                rules={rules.country}
                className="form_group"
              >
                <Select
                  // defaultValue="lucy"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  {countries.length
                    ? countries?.map((_) => <Option value={_}>{_}</Option>)
                    : ""}
                </Select>
              </Form.Item>
              <Form.Item
                name="gender"
                rules={rules.gender}
                className="form_group"
              >
                <label>Gender: </label>
                <Radio.Group
                  // value={"male"}
                  onChange={(value) =>
                    setFormData({ ...formData, gender: value })
                  }
                >
                  <Radio value={"male"}>male</Radio>
                  <Radio value={"female"}>female</Radio>
                </Radio.Group>
              </Form.Item>
              <div className="form_group pt_1 pb_2">
                <button type="reset" className="btn btn_gray">
                  clear
                </button>
                <FilledButton
                  type="submit"
                  loading={false}
                  value="submit"
                  className="btn_primary ml_1"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
