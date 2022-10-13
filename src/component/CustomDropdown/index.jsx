const CustomDropdown = ({
  className = "",
  label,
  name,
  innerClass = "",
  value,
  onChange,
  errorMessage,
  onFocus,
  promoCode,
  options = [
    { id: 1, name: "AL" },
    { id: 2, name: "IN" },
  ],
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      {
        <select
          disabled={promoCode}
          value={value}
          onFocus={onFocus}
          onChange={onChange}
          name={name}
          className={innerClass}
        >
          {options.map((data) => {
            return <option key={data.id}>{data.name}</option>;
          })}
        </select>
      }
      <p className="errMsg">{errorMessage}</p>
    </div>
  );
};

export default CustomDropdown;
