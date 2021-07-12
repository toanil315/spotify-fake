import { HIDE_LOADING, SHOW_LOADING } from "../type/LoadingType";

const stateDefault = {
    show: false
}

const LoadingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case HIDE_LOADING: {
            return {...state, show: false};
        }

        case SHOW_LOADING: {
            return {...state, show: true};
        }
    
        default: {
            return {...state};
        }
    }
}

export default LoadingReducer;