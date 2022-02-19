<template>
    <main-layout/>
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
  --black-principal: #2a2d31;
  --black-darker:#252525;
  --text-gray:#939AAB;
  --my-ab-color:#b55656;
  --lightest-gray:#ECECEC;

}

#app {
  font-family: Quicksand, Poppins, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
html {
  overflow-x: hidden;
  background-color: var(--gray-bg);

}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;


  background: #2f3134;
  border-radius: 100px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--black-principal);
  border-radius: 100px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--black-darker);
}
</style>
