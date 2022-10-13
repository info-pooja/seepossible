import { Spin } from 'antd';
import 'antd/es/spin/style/css';

const Loader = () => {

    return (
        <div className="loader">
            <Spin size="large" />
        </div>
    )
};

export default Loader;