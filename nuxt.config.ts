// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@formkit/nuxt","notivue/nuxt"],
  css: [
    'notivue/notification.css', // Only needed if using built-in notifications
    'notivue/animations.css' // Only needed if using built-in animations
  ],
  notivue: {
    position: 'bottom-right',
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 6000
      }
    }
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || "http://localhost:3000",
      apiUrl: process.env.API_URL || "http://localhost:8000",
    },
  },
  tailwindcss: {
    configPath: "tailwind.config.ts",
  },

  
 
})