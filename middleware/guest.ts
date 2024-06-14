import axios, { AxiosError } from "axios"
export default defineNuxtRouteMiddleware( async (to, from) => {
    
    try {
       
        const {data: user} = await axios.get('/user');
        if(user){
            return navigateTo('/me'); // redirige sur son profile
        }
        
    } catch (error : unknown) {
       
    } //sion on le laisse entrer ses indentifiants
})
