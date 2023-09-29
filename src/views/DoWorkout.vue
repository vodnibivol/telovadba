<template>
  <DoExercise :id="currentExercise" />
</template>

<script>
import DoExercise from './DoExercise.vue';

export default {
  name: 'DoWorkout',
  components: {
    DoExercise,
  },
  data() {
    return {
      currentExercise: 31,
    };
  },
};
</script>

<style lang="scss" scoped></style>
