import axios from "axios"

export default defineNuxtPlugin(async (nuxtApp) => {
    //Configuration de base pour que les requêtes soient acceptées par le backend
    const config = useRuntimeConfig();
    axios.defaults.baseURL = `${config.public.apiUrl}/api`;
    axios.defaults.headers.common['content-Type'] = "application/json"
    axios.defaults.headers.common['Accept'] = "application/json";
    axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    //Récupération du token CSRF
    await axios.get("/sanctum/csrf-cookie",{
        baseURL: config.public.apiUrl,
    });
})
