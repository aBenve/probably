<template>
  <div class="mt-5">
    <mySliderInput

        :label="firstLabel"
        :maxValue="firstMaxValue"
        :step="firstStep"
        :top-subs="firstTopSubs"
        :top-add="firstTopAdd"
        :small-add="firstSmallAdd"
        :small-subs="firstSmallSubs"

        @value-changed="updateValue"

    />
    <mySliderInput


        :label="secondLabel"
        :maxValue="relatedSliders ? maxSecondSlider:secondMaxValue"
        :step="secondStep"
        :top-subs="secondTopSubs"
        :top-add="secondTopAdd"
        :small-add="secondSmallAdd"
        :small-subs="secondSmallSubs"

        @value-changed="reSendEvent"

    />
  </div>
</template>

<script>

import mySliderInput from './MySliderInput'

export default {
  name: "DoubleSlider",
  data:() => ({
    maxSecondSlider:0
  }),
  props:{
    firstLabel:String,
    secondLabel:String,
    firstMaxValue:Number,
    secondMaxValue:Number,

    firstStep:Number,
    secondStep:Number,

    firstTopAdd:Number,
    firstSmallAdd: Number,
    firstTopSubs:Number,
    firstSmallSubs:Number,

    secondTopAdd:Number,
    secondSmallAdd: Number,
    secondTopSubs:Number,
    secondSmallSubs:Number,

    relatedSliders: Boolean

  },
  components:{mySliderInput},
  methods:{
    updateValue(val){
      this.$emit('value-changed', [val.pop(), -1])
      this.maxSecondSlider = val.pop()
    },
    reSendEvent(prop){
      this.$emit('value-changed', [-1,prop.pop()] )
    }
  }
}
</script>

<style scoped>

</style>