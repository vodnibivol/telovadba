<template>
  <Hero :title="data.title || 'Workout'" :imageSrc="imageSrc">
    <!-- SLOT for back -->
    <div id="buttons-container">
      <!-- <router-link id="back-link" @click.prevent="$router.go(-1)" to="#"> -->
      <router-link id="back-link" to="/">
        <i class="material-symbols-outlined">arrow_back</i>
      </router-link>

      <a href="#" @click.prevent="delModalOpen = true">
        <i class="material-symbols-outlined">delete</i>
      </a>

      <Modal v-if="delModalOpen" btn-msg="Delete" @CLOSE="delModalOpen = false" @SUBMIT="deleteWorkout">
        <div id="delete-modal-container">
          <h3>Delete '{{ data.title }}'?</h3>
        </div>
      </Modal>
    </div>
  </Hero>

  <div id="body" v-if="data">
    <!-- PLAY -->
    <router-link :to="{ name: 'DoWorkout', params: { id: $route.params.id } }" id="do_workout_btn">
      <button touchy>
        <i class="material-symbols-outlined md-fill">play_arrow</i>
      </button>
    </router-link>

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

    <!-- SETS (REPETITIONS) -->
    <div id="sets-container">
      <div class="icon-title">
        <h3>Sets</h3>
      </div>
      <div class="bubble-container">
        <!-- TODO -->
        <button class="bubble" @click="setsModalOpen = true">{{ data.sets || 4 }}x</button>
      </div>

      <Modal v-if="setsModalOpen" @CLOSE="setsModalOpen = false" @SUBMIT="submitSetPrefs">
        <div id="set-settings-container">
          <div class="flex-center">
            <h3>Sets:</h3>
            <NumberSelect :min="1" :max="99" :step="1" :initialValue="data.sets || 4" ref="sets" />
          </div>
        </div>
      </Modal>
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

  <div id="modals"></div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ExerciseCard from '@/components/cards/ExerciseCard.vue';
import Modal from '@/components/Modal.vue';
import NumberSelect from '@/components/NumberSelect.vue';

import EXERCISES from '@/assets/exercises.json';
import { store } from '@/store';

export default {
  name: 'Exercise',
  components: {
    Hero,
    ExerciseCard,
    Modal,
    NumberSelect,
  },
  data() {
    return {
      store,

      imageSrc: '',
      setsModalOpen: false,

      delModalOpen: false,

      data: {
        exercises: [],
      },
    };
  },
  beforeMount() {
    // get data on load:
    this.data = store.workouts.find((w) => w.id == this.$route.params.id);

    const equipment = new Set();
    const bodyParts = new Set();

    for (let ex of this.data.exercises) {
      // loop through exercises
      const d = EXERCISES.find((e) => e.id === ex.id); // this is exercise data
      ex.title = d.title;
      ex.category = d.category;
      equipment.add(d.equipment);
      bodyParts.add(...d.bodyPart);
    }

    equipment.delete('No Equipment');
    this.data.equipment = [...equipment].join(', ');
    this.data.bodyPart = bodyParts;

    // set image src from data
    this.imageSrc = 'img/ex/' + this.data.exercises[0]?.id + '-1.jpg';
  },
  methods: {
    submitSetPrefs() {
      this.data.sets = this.$refs.sets.value;
      this.closeModal();
    },

    deleteWorkout() {
      this.store.workouts = this.store.workouts.filter((w) => w.id !== this.data.id);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins';

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
  position: relative;
  padding: var(--app-padding);
  display: flex;
  flex-direction: column;
  gap: 20px;

  #do_workout_btn {
    position: absolute;
    right: var(--app-padding);
    top: 0px;
    transform: translateY(-50%);

    button {
      @include button(lightblue);
      border-radius: 50px;
      padding: 5px;
    }
  }

  #exercises-container {
    display: flex;
    flex-direction: column;
    gap: var(--card-gap);
  }

  #sets-container {
    .bubble {
      @include button(#eee);
      border: none;
    }
  }

  #equipment-container {
    p {
      color: var(--text-soft);
    }
  }

  #instructions-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>

<style lang="scss">
#modal {
  #set-settings-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      justify-content: space-between;
    }
  }
}
</style>
