<template>
  <div id="profile">
    <Hero title="Profile" imageSrc="img/workout_4.jpeg" />

    <div id="profile-container">
      <em>Profile page is under construction.</em>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';


export default {
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
#profile {
  #profile-container {
    padding: var(--app-padding);
  }
}
</style>
