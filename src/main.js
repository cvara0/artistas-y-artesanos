import './styles/styles.css'
import 'animate.css';
import 'vue-flux/style.css'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin,defaultConfig(config))

app.mount('#app')
