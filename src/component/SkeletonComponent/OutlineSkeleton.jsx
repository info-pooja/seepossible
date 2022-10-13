import React from "react";
import { Skeleton } from 'antd';

const OutlineSkeleton = () => {
    return (
        <div className='course_syllabus_wrap outline_skull'>
            <div className='course_syll_container'>
                <h2 className='syll_title'><Skeleton title={true} paragraph={false} active /></h2>
                <p className='syll_con' >
                    <Skeleton title={false} paragraph={{ rows: 4 }} active />
                </p>
            </div>
            <ul className='syllabus_sub_tab'>
                <li className={'active'}>
                    Course Outline
                </li>
                {/* <li>
                    Assignments & Discussion
                </li> */}
            </ul>
            <div className="syllabus_ouline_wrap">
                <div className="syll_outline">
                    <h2 className="syll_outline_title plus">
                        <span className='icon minus' />
                        <span><Skeleton title={true} paragraph={false} active /></span>
                        {/* <span className={"status"} /> */}
                    </h2>
                    {
                        Array(7).fill(7).map(_ =>
                            <div className="syll_outline_content">
                                <p
                                    className='syll_outline_exp'
                                >
                                    <Skeleton title={true} paragraph={false} active />
                                    {/* <span className="status" /> */}
                                </p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
};

export default OutlineSkeleton;