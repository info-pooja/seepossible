import { Spin } from 'antd';
import 'antd/es/spin/style/css';

const BtnLoader = () => {
    return (
        <div className="btn-loader">
            <Spin size="small" />
        </div>
    )
};

export default BtnLoader;