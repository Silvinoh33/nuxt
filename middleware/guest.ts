export default defineNuxtRouteMiddleware( async (to, from) => {
    try {
        const {initUser, user} = useAuth();
        await initUser();
        if(user.value){
            return navigateTo('/me'); // redirige sur son profile
        }
    } catch (error : unknown) {
       
    } //sion on le laisse entrer ses indentifiants
})
