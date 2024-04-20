import axios from "axios";
import api from "./api";
import TokenService from "./token.service";

interface User {
    accessToken: string;
    refreshToken: string;

}

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

const logout = async (token: User) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token?.accessToken,
        },
    }
    const response = await api.put("/logout", {}, config)

    if (response.status === 200) {
        TokenService.removeUser();
    }
    if (response.status == 500) {
        TokenService.removeUser()
    }
    return response;
}

const getList = async (token: User) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token?.accessToken,
        },
    }
    const response = await axios.get("https://asia-northeast1-willeder-official.cloudfunctions.net/api/lists", config)

    return response;
}



const AuthService = {
    login,
    resetPassword,
    register,
    forgetPassword,
    logout,
    getList,

};

export default AuthService;