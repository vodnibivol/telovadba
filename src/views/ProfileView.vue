<template>
  <div id="profile">
    <Header title="Profil" />
    <!-- <h1>This is a profile page</h1> -->
    <div id="profile-container">
      <em>Profil je v izdelavi.</em>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
#profile {
  text-align: center;

  #profile-container {
    padding: var(--app-padding);
  }
}
</style>
