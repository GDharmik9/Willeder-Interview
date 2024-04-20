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

const register = async (email: string, password: string, name: string, address: string, phone: number) => {
    const response = await api.post("/register", {
        email,
        password,
        name,
        address,
        phone,
    });

    return response;
}

const forgetPassword = async (email: string) => {
    const response = await api.put("/password/forgot", {
        email,
    });

    return response;
}

const AuthService = {
    login,
    resetPassword,
    register,
    forgetPassword

};

export default AuthService;