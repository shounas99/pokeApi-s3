import { createApp } from 'vue'
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from './App.vue'
import router from './router'

import './assets/main.css'


const app = createApp(App)

//Esto indica que todas mis llamadas van a ser mantenidas en cache por 2 minutos
// app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, //2 minutes
                refetchOnReconnect: 'always'
            }
        }
    }  
})

app.use(router)
app.mount('#app')
