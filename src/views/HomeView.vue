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
        <button touchy>
          <i class="material-symbols-outlined md-20">add</i>
          <span>New Workout</span>
        </button>
      </div>
    </div>
    
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

import Hero from '@/components/Hero.vue';
import WorkoutCard from '@/components/cards/WorkoutCard.vue';
import { store } from '@/store';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Navbar,
    Hero,
    WorkoutCard,
    Modal,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    submitPrefs() {
      // create a new workout
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins.scss';

#workouts-container {
  padding: var(--app-padding);

  display: flex;
  flex-direction: column;
  gap: var(--card-gap);

  #add-new-container {
    margin-top: 20px;

    button {
      // @include button(hsl(215, 46%, 86%));
      @include button(lightsteelblue);

      padding: 7px 12px 7px 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 50px;
      gap: 2px;

      font-weight: 500;

      border: none;
      color: hsl(215, 26%, 55%);
    }
  }
}
</style>
