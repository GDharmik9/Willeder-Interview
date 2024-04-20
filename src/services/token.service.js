
const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

const removeUser = () => {
    localStorage.removeItem('user');
}

const getLocalAccessToken = () => {
    const user = getUser();
    return user ? user.accessToken : '';
}

const getLocalRefreshToken = () => {
    const user = getUser();
    return user ? user.refreshToken : '';
}

const updateLocalAccessToken = (token) => {
    const user = getUser();
    setUser({ ...user, accessToken: token?.accessToken, refreshToken: token?.refreshToken });
}

const TokenService = {
    setUser,
    getUser,
    removeUser,
    getLocalAccessToken,
    getLocalRefreshToken,
    updateLocalAccessToken
}

export default TokenService;