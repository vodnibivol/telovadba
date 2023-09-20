<template>
  <router-link :to="{ name: 'Exercise', params: { id } }">
    <div id="exercise-card-container">
      <img :src="require('@/assets/img/ex/' + id + '-1.jpg')" alt="exercise img" />
      <div id="content-container">
        <h2 class="title">{{ title }}</h2>
        <!-- <p class="duration">{{ duration }} min</p> -->
        <p class="category">{{ category }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    title: String,
    duration: Number,
    category: String,
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
$card-height: 60px;

#exercise-card-container {
  display: flex;

  img {
    width: $card-height;
    height: $card-height;
    background: lightsteelblue;
    object-fit: cover;
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
