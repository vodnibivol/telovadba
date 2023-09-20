<template>
  <div id="hero-container">
    <img :src="imageSrc || require('@/assets/img/workout_1.jpeg')" alt="hero">
    <slot></slot>

    <h1>{{ title || 'Title' }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    imageSrc: String,
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
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
}
</style>
