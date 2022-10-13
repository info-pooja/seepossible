import { Skeleton } from 'antd';
import React from "react";

const AboutSkull = () => {
    return (
        <div className='courseDetail about-skull'>
            <h2 className='courseDetail_title'><Skeleton title={true} paragraph={false} active /></h2>
            <p>
                <Skeleton title={false} paragraph={{rows: 4}} active />
            </p>
            <ul className='course_sub_list'>
                <li><span><Skeleton title={true} paragraph={false} active /></span></li>
            </ul>
            <div className="course_intro_wrap">
                <div className="slide_arrow">
                    <div
                        className="arrow prev"
                    >
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4 3.9998L5.39998 11.9998L13.4 19.9998L11.8 23.1998L0.599976 11.9998L11.8 0.799805L13.4 3.9998Z" fill="black"/>
                        </svg>
                    </div>
                    <div
                        className="arrow next"
                    >
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4 3.9998L5.39998 11.9998L13.4 19.9998L11.8 23.1998L0.599976 11.9998L11.8 0.799805L13.4 3.9998Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className='courseIntro'>
                    <div className='courseIntro_img user_profile'><Skeleton.Avatar active /></div>
                    <h3 className='courseIntro_title'><Skeleton title={true} paragraph={false} active /></h3>
                    <h4 className='courseIntro_subtitle'><Skeleton title={true} paragraph={false} active /></h4>
                    <h2 className='courseIntro_prof'><Skeleton title={false} paragraph={{rows: 2}} active /></h2>
                    <div className='courseIntro_content' >
                        <Skeleton title={false} paragraph={{rows: 5}} active />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSkull;