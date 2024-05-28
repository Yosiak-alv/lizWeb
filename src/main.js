import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import './style.css'
import '../node_modules/nprogress/nprogress.css' 
import App from './App.vue'


const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.mount('#app')