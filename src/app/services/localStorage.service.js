const USER_ID_KEY = "userId";

export const setUserId = (userId) => {
    localStorage.setItem(USER_ID_KEY, userId);
};

export const getUserId = () => {
    return localStorage.getItem(USER_ID_KEY);
};

export const logout = () => {
    localStorage.removeItem(USER_ID_KEY);
};

export default {
    setUserId,
    getUserId,
    logout,
};
