import { userService } from "../../../service/UserService"
import { STATUS_CODE } from "../../../utils/config";
import { SET_USER_INFO } from "../../type/UserType";

export const getInfoAction = () => {
    return async (dispatch) => {
        try {
            const {data, status} = await userService.getUserInfo();
            if(status === STATUS_CODE.SUCCESS) {
                dispatch({
                    type: SET_USER_INFO,
                    data
                })
            }
        }
        catch(error) {
            console.log("error: ", error);
        }
    }
}