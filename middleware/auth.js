import { useUserStore } from "@/stores/userStore.js";
const Store = useUserStore();

export default defineNuxtRouteMiddleware(() => {
    if (!Store.token) {
        return navigateTo('/')
    }
})