<template>
  <router-view />
  <Navbar />
  <!-- <div id="home-indicator"></div> -->

    <!-- prettier-ignore -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&display=swap" rel="stylesheet" />
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  padding-bottom: 50px; // because of navbar
}

#home-indicator {
  background: black;
  width: 130px;
  height: 5px;
  position: fixed;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
}
</style>
