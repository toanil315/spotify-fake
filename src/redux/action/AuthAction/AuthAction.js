import { history } from "../../../App";
import { userService } from "../../../service/UserService";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN, STATUS_CODE, TOKEN } from "../../../utils/config";

export const authAction = () => {
    return async (dispatch) => {
        try {
            const code = window.location.href.split("=")[1];
            const { data, status } = await userService.getAccessToken(new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri: REDIRECT_URL,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            }))
            if (status === STATUS_CODE.SUCCESS) {
                localStorage.setItem(TOKEN, data.access_token);
                localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
                window.timerRefreshToken = setTimeout(() => {
                    dispatch(refreshTokenAction());
                }, (1000 * (3600 - 120)));
                history.push("/");
                window.isInLoginPage = false;
            }
        }
        catch (error) {
            console.log("error: ", error);
        }
    }
}

export const refreshTokenAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await userService.refreshTokenService(new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: localStorage.getItem(REFRESH_TOKEN),
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            }))
            if (status === STATUS_CODE.SUCCESS) {
                localStorage.setItem(TOKEN, data.access_token);
                window.timerRefreshToken = setTimeout(() => {
                    dispatch(refreshTokenAction());
                }, (1000 * (3600 - 120)));
            }
        }
        catch (error) {
            console.log("error: ", error);
        }
    }
}