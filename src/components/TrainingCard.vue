<template>
  <router-link to="/profile">
    <div id="training-card-container">
      <img :src="img" alt="training img" />
      <div id="content-container">
        <h2 class="title">{{ title }}</h2>
        <p class="duration">{{ duration }} min</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'TrainingCard',
  props: {
    title: String,
    duration: Number,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
$card-height: 60px;

#training-card-container {
  display: flex;
  height: $card-height;
  border: 1px solid pink;

  img {
    width: $card-height;
    background: lightpink;
  }

  #content-container {
    padding: 5px;
    display: flex;
    flex-direction: column;

    h2.title {
      // background: red;
      flex-grow: 1;
    }

    p.duration {
      // background: green;
      color: #bbb;
    }
  }
}
</style>
