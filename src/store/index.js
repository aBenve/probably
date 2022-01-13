import {createStore} from 'vuex'

const store = createStore({
    state() {
        return{
            currentOption: undefined,
        }
    },
    mutations:{
        setCurrentOption(state, option){
            state.currentOption = option
        },
        updateInputs(state, newValues){
            for(let i = 0 ; i < newValues.length ; i++)
                if(newValues[i] !== -1)
                state.currentOption.inputs[i].value = newValues[i]
        }
    },
    actions:{},
    getters:{
        getCurrentOption(state){
            return state.currentOption
        },
    },
    modules:{}
})

export default store