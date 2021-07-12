export const REDIRECT_URL = 'http://localhost:3000';
export const CLIENT_ID = 'fb7874ce8bdc40bdbfff211b52224f11';
export const CLIENT_SECRET = 'e32c33b2eabe49a491d27f05297adc92';
export const AUTH_URL = 'https://accounts.spotify.com/api/token';
export const TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';
export const loginURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=user-top-read`;
export const STATUS_CODE = {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
}
export const SEARCH_TYPE = 'track';
export const ID_OF_TOP_PLAYLIST = '37i9dQZEVXbLdGSmz6xilI';
window.subscribeRefreshToken = undefined;
window.timerRefreshToken = undefined;
window.isInLoginPage = false;
