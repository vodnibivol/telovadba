<template>
  <div id="hero-container">
    <div id="img-container" class="flex-center">
      <i class="material-symbols-outlined">broken_image</i>
      <img :src="baseUrl + (imageSrc || 'img/workout_1.jpeg')" @error="imgError" />
    </div>
    <slot></slot>

    <h1>{{ title || 'Title' }}</h1>
  </div>
</template>

<script>
import { baseUrl, imgError } from '@/store';

export default {
  name: 'Hero',
  props: {
    title: String,
    imageSrc: String,
  },
  data() {
    return {
      baseUrl,
    };
  },
  methods: {
    imgError,
  },
};
</script>

<style lang="scss" scoped>
#back-link {
  color: white;
  font-size: 18px;
}

#hero-container {
  // background: lightsteelblue;
  padding: 20px;
  min-height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  color: white;

  h1 {
    font-weight: 400;
    margin-top: 30px;
    z-index: 10;
  }

  #img-container {
    background: #222;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    i {
      opacity: 0.2;
    }

    img {
      position: absolute;
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
      filter: brightness(0.5);
    }
  }
}
</style>
