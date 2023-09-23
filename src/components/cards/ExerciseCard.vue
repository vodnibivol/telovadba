<template>
  <Card
    :to="{ name: 'Exercise', params: { id } }"
    :imgSrc="baseUrl + 'img/ex/' + id + '-1.jpg'"
    :title="title"
    :subtitle="category"
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
  props: {
    title: String,
    category: String,
    id: Number,
  },
  data() {
    return {
      store,
      baseUrl,
    };
  },
};
</script>
