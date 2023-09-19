<template>
  <Hero title="Trening" :imageSrc="hero" />

  <router-link to="/">nazaj</router-link>
  <hr />
  <p>id: {{ $route.params.id }}</p>
  <hr />
  <p>tukaj se bodo dinamično naložili podatki o treningu</p>
</template>

<script>
import Hero from '@/components/Hero.vue';
import EXERCISES from '@/assets/exercises.json';

export default {
  name: 'Training',
  components: {
    Hero,
  },
  data() {
    return {
      hero: '',
    };
  },
  mounted() {
    // get all data and load:
    // IMAGE
    // DESCRIPTION
    // DURATION
  },
};
</script>

<style></style>
