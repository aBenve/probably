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
        getMean(state){return state.mean},
        getSD(state){return state.sd},
        getVariance(state){return state.variance},

        getLowerValue(){return this.getMean() - 6 * this.getSD()},
        getUpperValue(){return this.getMean() + 6 * this.getSD()},

        getInputsValues(state){
            let toRet = []
            state.currentOption.inputs.forEach(inp => toRet.push(inp.value))
            return toRet
        }
    },
    modules:{}
})

export default store