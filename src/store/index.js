import {createStore} from 'vuex'

const store = createStore({
    state() {
        return{
            currentOption: {},
        }
    },
    mutations:{
        setCurrentOption(state, option){
            // HABIA QUE HACER DEEP COPY, se estaba guardando la referencia
            // Pero no puedoe hacer deep copy por que no es un objeto JSON, hay que limpiarlo antes de pasarlo.

            state.currentOption =  option;
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
        getDistroType(state){return state.currentOption.type},

        getInputsValues(state){

            let zero = false;
            state.currentOption.inputs.forEach(num => num.value === 0 || num.value === '0'? zero = true : '')
            if(zero)
                return -1
            let toRet = []
            // IMPORTANTISIMO EL + previo al input.
            // Deveria ponerlo en mas lugares, se asegura de que es numero y no string
            state.currentOption.inputs.forEach(inp => toRet.push(+inp.value))

            return toRet
        }



    },
    modules:{}
})

export default store