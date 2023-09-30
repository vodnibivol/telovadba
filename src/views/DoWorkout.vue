<template>
  <DoExercise :id="data.exercises[currentExercise].id" />
</template>

<script>
import DoExercise from './DoExercise.vue';
import { store } from '@/store';

export default {
  name: 'DoWorkout',
  components: {
    DoExercise,
  },
  data() {
    return {
      store,

      data: {},

      currentExercise: 0, // index
    };
  },
  beforeMount() {
    this.data = this.store.workouts.find((w) => w.id == this.$route.params.id);
    this.data.exercises = this.data.exercises.map((ex) => this.store.exercises.find((e) => e.id === ex.id));
    // console.log(this.data.exercises);
  },
};
</script>

<style lang="scss" scoped></style>
