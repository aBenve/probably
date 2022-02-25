<template>
  <div>
    <mySliderInput
        :label="firstInput.label"
        :max-value="firstInput.maxValue"
        :step="firstInput.step"
        :top-subs="firstInput.topSubs"
        :top-add="firstInput.topAdd"
        :small-subs="firstInput.smallSubs"
        :small-add="firstInput.smallAdd"

        @value-changed="updateFirstValue"


    />
    <mySliderInput
        :label="secondInput.label"
        :max-value="secondInput.maxValue"
        :step="secondInput.step"
        :top-subs="secondInput.topSubs"
        :top-add="secondInput.topAdd"
        :small-subs="secondInput.smallSubs"
        :small-add="secondInput.smallAdd"

        :min-value="relatedSliders === 'Hypergeometric' ? minSecondSlider : 1"

        @value-changed="updateSecondValue"

    />
    <mySliderInput

        :label="thirdInput.label"
        :max-value="relatedSliders === 'Hypergeometric' ? maxSecondSlider : 0"
        :step="thirdInput.step"
        :top-subs="thirdInput.topSubs"
        :top-add="thirdInput.topAdd"
        :small-subs="thirdInput.smallSubs"
        :small-add="thirdInput.smallAdd"

        @value-changed="updateThirdValue"
    />
  </div>
</template>

<script>

import mySliderInput from './MySliderInput'

export default {
  name: "TripleSlider",
  components:{mySliderInput},
  data:() => ({
    maxSecondSlider:0,
    minSecondSlider:0
  }),
  props:{
    firstInput: Object,
    secondInput: Object,
    thirdInput:Object,
    relatedSliders: [Boolean, String]
  },
  methods:{
    updateFirstValue(prop){
      let aux = prop.pop()
      this.minSecondSlider = aux
      this.$emit('value-changed', [aux, -1,-1])
    },
    updateSecondValue(prop){
      let aux = prop.pop()
      this.maxSecondSlider = aux
      this.$emit('value-changed', [-1,aux,-1] )
    },
    updateThirdValue(prop){
      this.$emit('value-changed', [-1,-1,prop.pop()] )
    },

  }
}
</script>

<style scoped>

</style>