import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userData: {
            email: null,
            token: null,
            rememberPassword: false
        }

    }),

    actions: {
        setUserData(data) {
            this.userData = data
        },
    }
})