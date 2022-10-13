import { Skeleton } from 'antd';

const CourseCardSkull = () => {
    return (
        <div className='course_skeleton'>
            <Skeleton.Image active shape={"square"} width={243} />
            <Skeleton paragraph={{ rows: 4 }} className="content" active title={false} />
        </div>
    )
};

export default CourseCardSkull