<template>
  <Card
    :link="{ name: 'Exercise', params: { id } }"
    :imgSrc="baseUrl + 'img/ex/' + id + '-1.jpg'"
    :title="title"
    :subtitle="category"
  />
</template>

<script>
import { baseUrl } from '@/store';
import Card from './Card.vue';

export default {
  name: 'ExerciseCard',
  components: {
    Card,
  },
  props: {
    id: Number,
    title: String,
    category: String,
  },
  data() {
    return {
      baseUrl,
    };
  },
};
</script>
