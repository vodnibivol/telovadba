<!-- TODO: !!!! -->

<template>
  <router-link to="#">
    <div id="exercise-card-container">
      <div id="img-container" class="flex-center">
        <i class="material-symbols-outlined">broken_image</i>
        <img :src="imgSrc" @error="imgError" />
      </div>

      <div id="content-container">
        <h2 class="title">{{ title || 'Title' }}</h2>
        <p class="subtitle">{{ subtitle || 'Subtitle' }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { baseUrl, imgError } from '@/store';

export default {
  name: 'Card',
  props: {
    // to: (String, Object),
    title: String,
    subtitle: String,
    imgSrc: String,
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

    p.subtitle {
      font-size: 12px;
      color: #bbb;
      font-weight: normal;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
