import CustomInput from "../component/CustomInput";
import { toTitleCase } from "../utils";
import close from '../assets/images/close_icon.svg'

const ErrorPop = ({ error, loading, onFocus, handleSubmit, handleOpenModal, email, setEmail, emailError, subBodyFunction, loader = false }) => {
    const { header, subHeader, bodyClass, body, body2, subBody, bodyLink, forget, param, className = "signpage_modal" } = error;

    return (
        <div className="modal_pop modal_body">
            <div className={className}>
                <span className="close_icon"><img src={close} alt="close_icon" /></span>
                <div className="signpage_modal">
                    {/* reset password*/}
                    <div className="resetpassword">
                        <h4 className={`mb_2 ${bodyClass ? bodyClass : ''}`}>{header}</h4>
                        {subHeader && <p className="mail_name mb_30">{subHeader?.toLowerCase()}</p>}
                        <p className="reset_content mb_3">{body}{body2 && <span className="d_block mt_3">{body2}</span>}{bodyLink && <a href="mailto:webmaster@example.com" className="pop_email"> {bodyLink}</a>}</p>
                        <div className="form_group">
                            {forget &&
                                <CustomInput
                                    placeholder='Email'
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={onFocus}
                                    className=""
                                    inputClass='form_control'
                                    errorMessage={emailError}
                                    errorClass="errormsg"
                                />
                            }
                        </div>
                        {subBody && <p className="resend_email" onClick={() => subBodyFunction(param)}>{toTitleCase(subBody)}</p>}
                        <div class="form_group mb_2">
                            {forget ? <>
                                <button type="reset" onClick={() => { setEmail(''); onFocus(); }} class="btn btn_gray">Clear</button>
                                <button type="submit" class="btn_primary ml_1" onClick={handleSubmit}>submit</button></>
                                : <button type="reset" onClick={() => { handleOpenModal() }} class="btn btn_light">OK</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorPop;