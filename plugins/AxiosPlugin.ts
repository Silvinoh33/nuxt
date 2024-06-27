import axios, { type AxiosResponse } from "axios"

export default defineNuxtPlugin(async (nuxtApp) => {
    //Configuration de base pour que les requêtes soient acceptées par le backend
    const config = useRuntimeConfig();
    axios.defaults.baseURL = `${config.public.apiUrl}/api`;
    axios.defaults.headers.common['content-Type'] = "application/json"
    axios.defaults.headers.common['Accept'] = "application/json";
    axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    let isInitialiseCheck = true;
    let route = useRoute()
    axios.interceptors.response.use(
        (response)=>response,
        (error)=>{
            if([401,419].includes((error.response as AxiosResponse).status)){
                const {logout} = useAuth();
                if (!["/login","/register"].includes(route.path)) {
                    if (isInitialiseCheck) {
                        console.log('connection initial échoué');
                        isInitialiseCheck = false;
                    } else {
                        logout();
                    }
                }
                
            }else{
                return Promise.reject(error);
            }
        }
    )
       

    //Récupération du token CSRF
    await axios.get("/sanctum/csrf-cookie",{
        baseURL: config.public.apiUrl,
    });
})
