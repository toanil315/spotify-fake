import { SET_USER_INFO } from "../type/UserType";

const stateDefault = {
    userInfo: null
}

const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return {...state, userInfo: {...action.data}};
        }
    
        default: {
            return {...state};
        }
    }
}

export default UserReducer;