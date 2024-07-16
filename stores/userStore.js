import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        email: null,
        token: null
    }),

    actions: {
        setUserData(data) {
            this.token = data.token
            this.email = data.email
        }
    }
})