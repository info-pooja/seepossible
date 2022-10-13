import BtnLoader from "../../layout/BtnLoader";

const FilledButton = ({ type = "button", className = "btn btn_gray", value = "Clear", loading, ...rest }) => {
    return (
        <button disabled={loading} {...rest} type={type} className={className}>{loading ? <BtnLoader /> : value}</button>
    )
};

export default FilledButton