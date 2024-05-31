import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import Toast from "vue-toastification";

import './style.css'
import "vue-toastification/dist/index.css";
import App from './App.vue'


const app = createApp(App)

app.use(MotionPlugin)
app.use(router)

app.use(Toast ,{
    position: "top-right",
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
})

app.mount('#app')