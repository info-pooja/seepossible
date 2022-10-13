import grideye_show from "../../assets/images/grideye_icons.svg";
import grideye_hide from "../../assets/images/grideye_icons_hide.svg";
import { Input } from "antd";

const CustomInput = ({
  label,
  value,
  type = "text",
  onChange,
  pass_eye,
  className = "detail_fill",
  inputClass,
  errorClass,
  handleShow,
  showPassword,
  errorMessage,
  name,
  typeName,
  ...rest
}) => {
  return (
    <div className={`${className}`}>
      <div>
        <label>{label}</label>
      </div>
      {type !== "password" ? (
        <Input
          {...rest}
          autoComplete={"off"}
          value={value?.[name] || value}
          name={name}
          className={inputClass}
          onChange={onChange}
          type={type}
        />
      ) : (
        <div className="position_relative">
          <Input
            autoComplete={"off"}
            {...rest}
            className={inputClass}
            value={value?.[name] || value}
            name={name}
            onChange={onChange}
            type={`${showPassword[name] ? "text" : type}`}
          />
          <span className={pass_eye}>
            <img
              onClick={() => handleShow(name)}
              src={`${showPassword[name] ? grideye_show : grideye_hide}`}
              alt="grideye_icon"
            />
          </span>
        </div>
      )}
      {errorMessage && (
        <p className={`digit_pass mt_05 ${errorClass ? errorClass : ""}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
