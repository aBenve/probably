import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from './store'

import icons from './FAicons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './index.css'
import "./plugins/chart"

import MathJax, { initMathJax, renderByMathjax } from "mathjax-vue3";

function onMathJaxReady() {
    const el = document.getElementById("equation");
    renderByMathjax(el);
}

initMathJax({}, onMathJaxReady);


library.add({...icons})


createApp(App)
    .use(router)
    .use(store)
    .use(MathJax)
    .component('fa',FontAwesomeIcon)
    .mount('#app')
