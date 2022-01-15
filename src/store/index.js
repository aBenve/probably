import {createStore} from 'vuex'

const store = createStore({
    state() {
        return{
            currentOption: "Inicio",
        }
    },
    mutations:{
        setCurrentOption(state, option){
            // Es raro pero sin esta linea al cambiar el estado, cambian los datos iniciales.
            //option.inputs.forEach(inp => inp.value = 0)

            state.currentOption =  Object.assign({}, option)
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
        // inputs es un array donde el primer valor es la x y despues vienen los inputs de la distro en orden
        getPValue(state, inputs){
          return state.currentOption.P(inputs)
        },
        getMean(state, getters){return state.currentOption.mean(getters.getInputsValues)},
        getSD(state, getters){return state.currentOption.sd(getters.getInputsValues)},
        getVariance(state, getters){return state.currentOption.variance(getters.getInputsValues)},

        getLowerValue(state, getters){
            return Math.floor(getters.getMean - 6 * getters.getSD > 0 ? getters.getMean - 6 * getters.getSD : 0)
        },
        getUpperValue(state, getters){
            if(state.currentOption.name === 'Binomial' && state.currentOption.inputs[0].value < 10)
                return state.currentOption.inputs[0].value // todo: esto estaba +1 pero se pasa del n y da error la combinatoria
            return Math.floor(getters.getMean + 6 * getters.getSD)
        },

        getInputsValues(state){

            let zero = false;
            /*

            for(let i = 0 ; i < state.currentOption.inputs.length ; i++)
            {
                if(state.currentOption.inputs[i].value === 0)
                    zero = true
            }
             */
            state.currentOption.inputs.forEach(num => num.value === 0 ? zero = true : '')
            if(zero)
                return -1
            let toRet = []
            state.currentOption.inputs.forEach(inp => toRet.push(inp.value))
            return toRet
        }



    },
    modules:{}
})

export default store