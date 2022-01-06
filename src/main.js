import { createApp } from 'vue'
import App from './App.vue'

import icons from './FAicons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './index.css'

library.add({...icons})


createApp(App)
    .component('fa',FontAwesomeIcon)
    .mount('#app')
