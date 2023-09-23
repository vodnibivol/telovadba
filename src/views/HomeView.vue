<template>
  <div id="home">
    <Hero title="Workouts" imageSrc="img/workout_1.jpeg" />

    <div id="workouts-container">
      <em>{{ store.workouts.length }} workouts</em>

      <template v-for="(w, i) in store.workouts" :key="i">
        <hr />
        <WorkoutCard :id="w.id" :title="w.title" :exercises="w.exercises" />
      </template>
      <hr />

      <div id="add-new-container" class="flex-center">
        <button>
          <i class="material-symbols-outlined md-18">add</i>
          <span>New Workout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import WorkoutCard from '@/components/cards/WorkoutCard.vue';
import { store } from '@/store';

export default {
  components: {
    Hero,
    WorkoutCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins.scss';

#workouts-container {
  padding: var(--app-padding);

  display: flex;
  flex-direction: column;
  gap: 5px;

  #add-new-container {
    margin-top: 20px;

    button {
      @include button(hsl(197, 50%, 85%));

      padding: 7px 12px 7px 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 50px;

      font-weight: 500;

      border-color: var(--color-black);
      border: none;
      color: hsl(197, 30%, 55%);
    }
  }
}
</style>
