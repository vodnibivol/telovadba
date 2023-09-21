<template>
  <div id="home">
    <Hero title="Trainings" imageSrc="img/workout_1.jpeg" />

    <div id="trainings-container">
      <em v-if="!trainings.length">No trainings.</em>
      <template :key="t" v-for="t in trainings">
        <TrainingCard :img="t.img" :title="t.title" :duration="t.duration" :url="t.url" />
      </template>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import TrainingCard from '@/components/TrainingCard.vue';

export default {
  components: {
    Hero,
    TrainingCard,
  },
  data() {
    return {
      trainings: [
        // { title: 'Trening 1', img: 'img1', duration: 30, url: '/training/id1' },
        // { title: 'Trening 2', img: 'img2', duration: 20, url: '/training/id2' },
        // { title: 'Trening 3', img: 'img3', duration: 50, url: '/training/id3' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#trainings-container {
  padding: var(--app-padding);

  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
