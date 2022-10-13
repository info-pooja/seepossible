import { Modal } from 'antd';

const CustomModal = ({ handleOpen, open, className="errorPop", darkOverlay, children, isVideoPop, setPlaying }) => {

    const handleCancel = () => {
        if (isVideoPop) {
            open && setPlaying(false);
            open && setTimeout(() => { handleOpen(false) }, 0);
        } else {
            handleOpen(false);
        }
    };

    return (
        <Modal maskStyle={darkOverlay ? {backgroundColor: "rgba(75,75,75,0.80)"} : {}} className={className} footer={null} visible={open} onCancel={() => handleCancel()}>
            {children}
        </Modal>
    )
};

export default CustomModal