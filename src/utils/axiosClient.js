import axios from "axios";
import { history } from "../App";
import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, STATUS_CODE, TOKEN } from "./config";

const axiosClient = axios.create();

const refreshToken = async (model) => {
    console.log("refreshing token");
    try {
        const { data, status } = await axios({
            url: "https://accounts.spotify.com/api/token",
            method: "POST",
            data: model
        })
        if (status === STATUS_CODE.SUCCESS) {
            localStorage.setItem(TOKEN, data.access_token)
        }
    }
    catch (error) {
        localStorage.removeItem(REFRESH_TOKEN);
        localStorage.removeItem(TOKEN);
        history.push("/login");
    }
}

axiosClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (STATUS_CODE.UNAUTHORIZED === error.response.status) {
        window.subscribeRefreshToken = window.subscribeRefreshToken
            ? window.subscribeRefreshToken
            : refreshToken(new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: localStorage.getItem(REFRESH_TOKEN),
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            }))

        window.subscribeRefreshToken.then((value) => {
            window.subscribeRefreshToken = null;
            window.location.reload();
        })
    } else {
        return Promise.reject(error);
    }
})

export default axiosClient