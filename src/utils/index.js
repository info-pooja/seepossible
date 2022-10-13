import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getAccessToken = () => cookies.get(`access_token`);
export const isAuthenticated = () => !!getAccessToken();

export const customFieldValidator = (fields, formData) => {
  let errors = {};
  fields.map((field) => {
    switch (field.rule) {
      case "number": {
        let number = /^[0-9]*$/.test(formData[field.name]);
        if (!formData[field.name]) {
          errors[field.name] = `${field.fieldName} is required`;
        } else if (!number) {
          errors[field.name] = `Only numbers are allowed`;
        }
        break;
      }
      case "specialChar": {
        let specialChar = /^[a-zA-Z ]*$/.test(formData[field.name]);
        if (!formData[field.name]) {
          errors[field.name] = `${field.fieldName} is required`;
        } else if (!specialChar) {
          errors[
            field.name
          ] = `Numeric and special characters are not allowed here`;
        }
        break;
      }
      case "email": {
        let checkEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            formData[field.name]
          );
        if (!formData[field.name]) {
          errors[field.name] = `${field.fieldName} is required`;
        } else if (!checkEmail) {
          errors[field.name] = `Email is invalid`;
        }
        break;
      }
      default: {
        if (!formData[field.name]) {
          errors[field.name] = `${field.fieldName} is required`;
        }
        break;
      }
    }
  });
  return errors;
};

export function toTitleCase(str) {
  if (typeof str === "string") {
    let splitStr = str?.toLowerCase()?.split(".");
    for (let i = 0; i < splitStr?.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i]?.replaceAll("\r", "").trim().charAt(0)?.toUpperCase() +
        splitStr[i]?.replaceAll("\r", "").trim().substring(1);
    }
    // Directly return the joined string
    return splitStr?.join(". ");
  }
  return str;
}
