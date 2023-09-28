<template>
  <Card
    :to="{ name: 'Workout', params: { id } }"
    :imgSrc="baseUrl + 'img/ex/' + exercises[0]?.id + '-1.jpg'"
    :title="title"
    :subtitle="subtitle"
  />
</template>

<script>
import { store, baseUrl } from '@/store';
import Card from './Card.vue';

export default {
  name: 'ExerciseCard',
  components: {
    Card,
  },
  beforeMount() {
    console.log(this.exercises);
  },
  props: {
    id: Number,
    title: String,
    exercises: Array, // Array of Exercise Objects {}
  },
  data() {
    return {
      store,
      baseUrl,
    };
  },
  computed: {
    subtitle() {
      return this.exercises.map((ex) => this.store.exercises.find((e) => e.id === ex.id).title).join('; ');
    },
  },
};
</script>
