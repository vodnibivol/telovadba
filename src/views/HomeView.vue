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
        <button @click="openModal" touchy>
          <i class="material-symbols-outlined md-20">add</i>
          <span>New Workout</span>
        </button>

        <!-- MODAL -->
        <Modal v-if="modalOpen" btnMsg="Create" @CLOSE="closeModal" @SUBMIT="submitPrefs">
          <div id="add-modal-container">
            <h3>Workout name:</h3>
            <input type="text" placeholder="i. e. Stretching workout" ref="exInput" autocomplete="off" />
          </div>
        </Modal>
      </div>
    </div>

    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import WorkoutCard from '@/components/cards/WorkoutCard.vue';
import Modal from '@/components/Modal.vue';

import { store } from '@/store';

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

      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
      setTimeout(() => this.$refs.exInput.select(), 10);
    },
    closeModal() {
      this.modalOpen = false;
    },
    submitPrefs() {
      // create a new workout
      if (this.$refs.exInput.value.trim() === '') return;

      this.store.workouts.push({
        id: this.store.workouts.length,
        title: this.$refs.exInput.value.trim(),
        exercises: [],
      });

      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins';

#workouts-container {
  padding: var(--app-padding);

  display: flex;
  flex-direction: column;
  gap: var(--card-gap);

  #add-new-container {
    margin-top: 20px;

    button {
      // @include button(hsl(215, 46%, 86%));
      @include button(hsl(195, 53%, 79%));

      padding: 7px 12px 7px 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 50px;
      gap: 2px;

      font-weight: 500;

      border: none;
      color: hsl(195, 26%, 55%);
    }
  }
}
</style>

<!-- MODAL STYLES -->
<style lang="scss">
#modal #add-modal-container {
  display: flex;
  flex-direction: column;

  gap: 10px;

  input {
    padding: 3px 5px;
  }
}
</style>
