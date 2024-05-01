import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from "notivue";

import "notivue/notification.css"; 
import "notivue/animations.css"; 

const notivue = createNotivue({
  enqueue: true, 
  limit: 1
});
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(notivue);
app.use(router)

app.mount('#app')
