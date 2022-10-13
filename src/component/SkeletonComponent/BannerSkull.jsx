import React from "react";
import { Skeleton } from 'antd';

const BannerSkull = () => {
    return (
        <div className='banner_skeleton'>
            <Skeleton.Avatar shape="square" active />
        </div>
    )
};

export default BannerSkull