import axios from "axios";
import axiosClient from "../utils/axiosClient";
import { CLIENT_ID, REDIRECT_URL } from "../utils/config";
import BaseService from "./BaseService";

class UserService extends BaseService {
    getAccessToken = (model) => {
        return this.postWithoutHeader("https://accounts.spotify.com/api/token", model);

    }
    authorizeAcount = () => {
        return axiosClient.get(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}`);
    }
    getUserInfo = () => {
        return this.get("https://api.spotify.com/v1/me");
    }
    refreshTokenService = (model) => {
        return this.postWithoutHeader("https://accounts.spotify.com/api/token", model);
    }
}

export const userService = new UserService();