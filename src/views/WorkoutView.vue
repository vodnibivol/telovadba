<template>
  <Hero :title="data.title || 'Workout'" :imageSrc="imageSrc">
    <!-- SLOT for back -->
    <div id="buttons-container">
      <!-- <router-link id="back-link" @click.prevent="$router.go(-1)" to="#"> -->
      <router-link id="back-link" to="/">
        <i class="material-symbols-outlined">arrow_back</i>
      </router-link>
      <i class="material-symbols-outlined disabled">more_vert</i>
    </div>
  </Hero>

  <div id="body" v-if="data">
    <!-- DIFFICULTY and CATEGORY -->
    <!-- <div id="difficulty-container" class="icon-title no-margin">
      <i class="material-symbols-outlined">signal_cellular_alt</i>
      <h3>{{ data.difficulty }}</h3>
    </div>
    <div id="category-container" class="icon-title no-margin">
      <i class="material-symbols-outlined">category</i>
      <h3>{{ data.category }}</h3>
    </div>

    <hr /> -->

    <div id="exercises-container">
      <em>{{ data.exercises.length }} exercises</em>

      <template v-for="(w, i) in data.exercises" :key="i">
        <hr />
        <ExerciseCard :id="w.id" :title="w.title" :category="w.category" />
      </template>
      <hr />
    </div>

    <!-- REPETITIONS -->
    <div id="repetitions-container">
      <div class="icon-title">
        <h3>Repetitions</h3>
      </div>
      <div class="bubble-container">
        <!-- TODO -->
        <span class="bubble">6x</span>
        <span class="bubble">30s</span>
      </div>
    </div>

    <hr />

    <!-- EQUIPMENT -->
    <div id="equipment-container">
      <div class="icon-title">
        <i class="material-symbols-outlined">exercise</i>
        <h3>Equipment:</h3>
      </div>
      <em v-if="!data.equipment">No equipment needed.</em>
      <p v-if="data.equipment">{{ data.equipment }}</p>
    </div>

    <hr />

    <!-- BODY PARTS -->
    <div id="body-parts-container">
      <div class="icon-title">
        <i class="material-symbols-outlined">accessibility_new</i>
        <h3>Body Parts:</h3>
      </div>
      <div class="bubble-container">
        <div class="bubble" v-for="(e, i) in data.bodyPart" :key="i">{{ e }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ExerciseCard from '@/components/cards/ExerciseCard.vue';
import EXERCISES from '@/assets/exercises.json';
import { store } from '@/store';

export default {
  name: 'Exercise',
  components: {
    Hero,
    ExerciseCard,
  },
  data() {
    return {
      store,

      imageSrc: '',

      data: {
        exercises: [],
      },
    };
  },
  mounted() {
    // get data on load:
    this.data = store.workouts.find((w) => w.id == this.$route.params.id);
    console.log(this.data);

    let equipment = new Set();
    let bodyParts = new Set();

    for (let ex of this.data.exercises) {
      // loop through exercises
      const d = EXERCISES.find((e) => e.id === ex.id); // this is exercise data
      console.log(d);
      ex.title = d.title;
      ex.category = d.category;
      equipment.add(d.equipment);
      bodyParts.add(...d.bodyPart);
    }

    equipment.delete('No Equipment');
    this.data.equipment = [...equipment].join(', ');
    this.data.bodyPart = bodyParts;

    // set image src from data
    this.imageSrc = 'img/ex/' + this.data.exercises[0].id + '-1.jpg';
  },
};
</script>

<style lang="scss" scoped>
// HERO
#buttons-container {
  display: flex;
  justify-content: space-between;
  justify-self: flex-start;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: var(--app-padding);
}

#body {
  padding: var(--app-padding);
  display: flex;
  flex-direction: column;
  gap: 20px;

  #exercises-container {
    display: flex;
    flex-direction: column;
    gap: var(--card-gap);
  }

  #equipment-container {
    p {
      // TODO: change to var (text-soft)
      color: #bbb;
    }
  }

  #instructions-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>