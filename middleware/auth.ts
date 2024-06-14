import axios, { AxiosError } from "axios"
export default defineNuxtRouteMiddleware( async (to, from) => {
    
    try {
        await axios.get('/user')
    } catch (error : unknown) {
        if (error instanceof AxiosError && error.response?.status === 401) {
            console.log('auth middleware');
            return navigateTo('/login');
        }
    }
})
