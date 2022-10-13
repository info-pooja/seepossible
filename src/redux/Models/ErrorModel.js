const ErrorModel = {
    state: {
        isOpen: false,
        error: {}
    },
    reducers: {
        setErrorPop(state, payload) {
            let temp = {...state};
            temp.isOpen = !temp.isOpen;
            temp.error = {...payload};
            return temp;
        },
        closeErrorPop(state, payload) {
            let temp = {...state};
            temp.isOpen = false;
            temp.error = {...payload};
            return temp;
        }
    },
    effects: (dispatch) => ({
        handleErrorPop(payload) {
            this.setErrorPop(payload)
        },
        handleClose() {
            this.closeErrorPop({});
        }
    }),
};

export default ErrorModel;