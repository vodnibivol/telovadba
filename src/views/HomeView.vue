<template>
  <div id="home">
    <Header title="Treningi" />

    <div id="trainings-container">
      <em v-if="!trainings.length">Ni treningov.</em>
      <template :key="t" v-for="t in trainings">
        <TrainingCard :img="t.img" :title="t.title" :duration="t.duration" />
      </template>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import TrainingCard from '@/components/TrainingCard.vue';

export default {
  components: {
    Header,
    TrainingCard,
  },
  data() {
    return {
      trainings: [
        { title: 'Trening 1', img: 'img1', duration: 30 },
        { title: 'Trening 2', img: 'img2', duration: 20 },
        { title: 'Trening 3', img: 'img3', duration: 50 },
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
