import { defineStore } from 'pinia'
import localStorageService from '../services/localStorage';
import { LocalStorageUser } from '../types/models/User/localStorageUser';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        authData: localStorageService.get()
    }),
    getters: {
        getUser: (state) => state.authData?.admin,
        isAuthenticated(): boolean {
            return this.getUser !== undefined && this.getUser !== null
        },
    },
    actions: {
        login(data: LocalStorageUser) {
            localStorageService.set(data)

            this.authData = localStorageService.get();
        },
        logout() {
            localStorage.clear()
        },
        updateUser(data: LocalStorageUser) {
            this.authData = localStorageService.set(data)
        }
    },
})