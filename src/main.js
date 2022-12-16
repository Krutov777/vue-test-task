import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from "@/store";


const app = createApp(App)

app
    .use(store)
    .use(router)
    .mount('#app');