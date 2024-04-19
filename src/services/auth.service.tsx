import api from "./api";
import TokenService from "./token.service";

export const login = async (email: string, password: string) => {
    const response = await api.put("/login", {
        email,
        password,
    });

    if (response.status === 200) {
        TokenService.setUser(response.data);
    }
    return response;
};

const resetPassword = async (password: string, tokenId: string) => {
    const response = await api.put('/password/reset', {
        password,
        tokenId,
    });

    return response;

}

const AuthService = {
    login,
    resetPassword

};

export default AuthService;