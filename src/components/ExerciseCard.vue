<template>
  <router-link :to="{ name: 'Exercise', params: { id } }">
    <div id="exercise-card-container">
      <div id="img-container" class="flex-center">
        <i class="material-symbols-outlined">broken_image</i>
        <img :src="baseUrl + 'img/ex/' + id + '-1.jpg'" @error="imgError" />
      </div>

      <div id="content-container">
        <h2 class="title">{{ title }}</h2>
        <p class="category">{{ category }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { store, baseUrl, imgError } from '@/store';

export default {
  name: 'ExerciseCard',
  props: {
    title: String,
    duration: Number,
    category: String,
    id: Number,
  },
  data() {
    return {
      store,
      baseUrl,
    };
  },
  methods: {
    imgError,
  },
};
</script>

<style lang="scss" scoped>
$card-height: 60px;

#exercise-card-container {
  display: flex;

  #img-container {
    background: lightsteelblue;
    position: relative;
    z-index: -1;
    width: $card-height;
    height: $card-height;
    flex-shrink: 0;

    i {
      opacity: 0.2;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: lightsteelblue;
    }
  }

  #content-container {
    padding: 7px;
    display: flex;
    flex-direction: column;

    overflow: hidden;

    h2.title {
      flex-grow: 1;
      font-size: 17px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p.duration,
    p.category {
      font-size: 12px;
      color: #bbb;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
