import React from "react";
import foundPage from "../../assets/images/not_foundPage.svg";

const NotFound = () => {
    return (
        <div className="not_found_Page" >
            <div className="not_found_wrapper">
                <div className="not_found_content">
                    <div className="notfound mb-40"><img src={foundPage} alt="notfound" /></div>
                    <h3>Page not Found!</h3>
                    <p>We're Sorry, the page you requested could not be found please go to back the homepage</p>
                </div>
            </div>
        </div>
    )
};

export default NotFound