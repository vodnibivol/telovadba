<template>
  <router-view />
  <Navbar />
  <!-- <div id="home-indicator"></div> -->
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
