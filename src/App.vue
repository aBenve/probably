<template>
  <MainLayout/>
</template>

<script>

import MainLayout from "./views/MainLayout";
export default {
  name: "App",
  components: {MainLayout},

};
</script>

<style>

:root{
  --gray-bg:#2f3339;
  --black-principal:#272a2e;

  --text-gray:#939AAB;
  --lightest-gray:#ECECEC;
}

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}
html {
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  margin-top: 1rem;
  margin-bottom: 1rem;

  background: #272A2E;
  border-radius: 100px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555555;
  border-radius: 100px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3f3e3e;
}
</style>
