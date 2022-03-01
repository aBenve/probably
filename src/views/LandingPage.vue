<template>
  <div class="flex justify-center items-center h-screen flex-col space-y-5 bg">
    <img class="" src="../assets/proABly-new.svg" alt="probably" height="20" width="300" />

    <router-link to="/dashboard">
      <button class="rounded-2xl bg-black px-5 py-3 font-semibold button text-white">
        COMENZAR
      </button>
    </router-link>


    <div class="absolute right-5 bottom-5 text-gray-500">
      Work in progress
    </div>

  </div>

</template>

<script>
export default {
  name: "LandingPage"
}
</script>

<style scoped>
.button{
  opacity: 0.7;
  box-shadow: 0 0 10px 5px var(--black-principal);

}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.button:hover{
  opacity: 1;
}
</style>