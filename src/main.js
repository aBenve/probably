import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from './store'

import icons from './FAicons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './index.css'

library.add({...icons})


createApp(App)
    .use(router)
    .use(store)
    .component('fa',FontAwesomeIcon)
    .mount('#app')
