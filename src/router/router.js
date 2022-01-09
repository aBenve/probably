import {createWebHistory, createRouter} from 'vue-router'

import optionsInfo from "../components/sidebar/optionsInfo";

const history = createWebHistory()
const router = createRouter(
    {
        history,
        routes:[
            {
                path:'',
                name:'Home',
                component: () => import(/* webpackChunkName: "Landing" */ '../views/Home'),
            },
            {
                path:'/:id',
                name:'WorkingOption',
                component: () => import(/* webpackChunkName: "Landing" */ '../views/WorkingOption'),
                beforeEnter: (to, from, next) => {
                    // antes de entrar, verifico si es uno de las opciones posibles, sino se rechaza.
                    if (optionsInfo.find(obj => obj.name === to.params.id) !== undefined){
                        next()
                        return true
                    }
                    next({name: "404Page"})
                }
                //todo: necesrio checkear si la opcion que se mando es valida, sino mandar a pagina 404
            },
            {
                path: '/notFound',
                name:'404Page',
                component: () => import(/* webpackChunkName: "Landing" */ '../views/Page404'),
                //todo: necesrio checkear si la opcion que se mando es valida, sino mandar a pagina 404
            },
        ]
    }
)

export default router