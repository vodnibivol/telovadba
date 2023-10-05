<template>
  <DoSet :id="currentId" :next-id="nextId"  @SET_END="nextExercise" :key="setKey" :workoutSets="data.sets" />
</template>

<script>
import DoExercise from './DoExercise.vue';
import DoSet from './DoSet.vue';
import { store } from '@/store';

export default {
  name: 'DoWorkout',
  components: {
    DoExercise,
    DoSet,
  },
  data() {
    return {
      store,

      data: {},

      exerciseIndex: 0, // index
      setKey: 0, // for resetting the component
    };
  },
  computed: {
    currentId() {
      return this.data.exercises[this.exerciseIndex]?.id;
    },
    nextId() {
      return this.data.exercises[this.exerciseIndex + 1]?.id;
    },
  },
  beforeMount() {
    this.data = this.store.workouts.find((w) => w.id == this.$route.params.id);
    this.data.exercises = this.data.exercises.map((ex) => this.store.exercises.find((e) => e.id === ex.id));
  },
  methods: {
    nextExercise() {
      this.exerciseIndex++;
      this.setKey++;
    }
  }
};
</script>

<style lang="scss" scoped></style>
