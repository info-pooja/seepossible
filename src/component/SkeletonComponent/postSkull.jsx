import { Skeleton } from "antd";
import React from "react";

const PostSkull = () => {
    return (
        <div className="usc_comment_replay post_skull">
            <div className='usc_ad_profile'>
                <div className="usc_profile user_profile"><Skeleton.Avatar active /></div>
                <div className="usc_user">
                    <h4><Skeleton title={true} paragraph={false} active /></h4>
                    <span><Skeleton title={true} paragraph={false} active /></span>
                </div>
            </div>
            <div className='usc_msg'>
                <p>
                    <Skeleton title={false} paragraph={{rows: 4}} active />
                </p>
            </div>
        </div>
    )
};

export default PostSkull