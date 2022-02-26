<template>
  <div class="my-5 flex-col  container">
    <input
        type="range"
        :step="step"
        class="w-full cursor-pointer slider mb-5 transition duration-1000 ease-in-out "
        :min="min"
        :max="max"
        v-model="value"
        @input="this.$emit('value-changed', [value, value])"
    />
    <div class="text-lg font-bold num-data px-3 py-3 rounded-full flex ">
      <input
          type="number"
          :min="min"
          :max="max"
          v-model="value"
          class="focus:outline-none bg-transparent w-full "
          @input="this.$emit('value-changed', [value, value])"
      >
    </div>

  </div>
</template>

<script>
export default {
  name: "SingleSliderSelector",
  props:{
    min: Number,
    max:Number,
    step:Number
  },
  data: () => ({
    value: 0,
  }),
}
</script>

<style scoped>
.container{
  width: 100%;
}
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: var(--black-darker); /* Grey background */
  border-radius: 9999px;
  outline: none; /* Remove outline */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}


/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  border-radius: 9999px;
  background: var(--black-darker); /* Green background */
  border: 3px solid var(--accent-color);
  cursor: pointer; /* Cursor on hover */
  box-shadow: 0 0 0 0 rgba(20,20,20,0.1);
  transition: box-shadow .3s ease-in-out;

}

.slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(20,20,20,0.1);
}

.slider::-webkit-slider-thumb:active {
  box-shadow: 0 0 0 20px rgba(20,20,20,0.1);
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: var(--accent-color); /* Green background */
  cursor: pointer; /* Cursor on hover */
}
.num-data{
  background-color: #252525;
  color: var(--accent-color);
  min-width: 5.5rem;
  max-width: 5.5rem;
  box-shadow: inset 0 0 0 0px var(--accent-color);
  transition: 0.2s ease-in-out;
}

.num-data:hover{
  box-shadow: inset 0 0 0 2px var(--accent-color);
}
</style>