import { LocalStorageUser } from "../types/models/User/localStorageUser";

const localStorageService = {
    get: () => {
        const value = localStorage.getItem('@user');

        const user = value !== null && JSON.parse(value)

        return user ? user : null;
    },

    set: (user: LocalStorageUser) => localStorage.setItem("@user", JSON.stringify(user)),
};

export default localStorageService;
