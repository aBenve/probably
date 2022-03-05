<template>
      <div class="rounded-2xl overflow-x-hidden sidebar flex flex-col justify-between h-full p-4">
        <div class="flex flex-col align-center">
          <div class="flex flex-row justify-center p-4">
            <router-link to="/dashboard">
              <div >
                <img class="zoom " src="../../assets/proABly-new.svg" alt="probably" height="10" width="150" />
              </div>
            </router-link>
          </div>
          <br/>
          <div v-for="option in options" :key="option" class="">
            <div v-if="option.children === undefined">option.tittle</div>
            <my-dropdown v-if="option.children.length > 0" class="my-1 " :name="option.title" :mainIcon="option.icon" :options="option.children" @dropDown-option-clicked="this.$emit('dropDown-option-clicked')"/>
          </div>
        </div>
        <div class="text-gray-500 hover:text-white transform duration-75 ease-out">
          <router-link to="/">
            Go back
          </router-link>
        </div>
      </div>
</template>

<script>

import MyDropdown from "../myDropdown";

export default {
  name: "Sidebar",
  components: {MyDropdown},
  data: () => ({
    options: [
        {
          title: 'Discrete',
          icon:'chart-bar',
          children: [
              'Binomial',
              'Geometric',
              'Hypergeometric',
              'Poisson'
          ]
        },
        {
          title: 'Continuous',
          icon:'chart-area',
          children: [
            'Uniform',
            'Exponential',
            'Normal',
          ]
        }
    ]
  })

}
</script>

<style scoped>
.sidebar{
  background-color:var(--black-principal);
  width: 15rem;
}
.zoom {
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.03); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

</style>