import React from "react";
import { Skeleton } from "antd";

const FaqSkull = () => {
    return (
        <div className="course_faq_wrap faq-skull">
            <div className='course_syll_container'>
                <h2 className='syll_title'><Skeleton title={true} paragraph={false} active /></h2>
                <p className='syll_con' >
                    <Skeleton title={false} paragraph={{rows: 4}} active />
                </p>
            </div>
            <ul className="faq_course_list">
                <li>
                    <h2 className='faq_title'><Skeleton title={true} paragraph={false} active /></h2>
                    <p className='faq_con' >
                        <Skeleton title={false} paragraph={{rows: 2}} active />
                    </p>
                </li>
            </ul>
        </div>
    )
};

export default FaqSkull;