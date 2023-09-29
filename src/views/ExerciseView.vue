<template>
  <Hero :title="data.title || 'Exercise'" :imageSrc="imageSrc">
    <!-- SLOT for back -->
    <div id="buttons-container">
      <!-- <router-link id="back-link" @click.prevent="$router.go(-1)" to="#"> -->
      <router-link id="back-link" to="/search">
        <i class="material-symbols-outlined">arrow_back</i>
      </router-link>
      <i class="material-symbols-outlined disabled" disabled>playlist_add</i>
    </div>
  </Hero>

  <div id="body">
    <router-link :to="{ name: 'DoExercise', params: { id } }" id="do_exercise_btn">
      <button touchy>
        <i class="material-symbols-outlined">play_arrow</i>
      </button>
    </router-link>

    <!-- DIFFICULTY and CATEGORY -->
    <div id="difficulty-container" class="icon-title no-margin">
      <i class="material-symbols-outlined">signal_cellular_alt</i>
      <h3>{{ data.difficulty }}</h3>
    </div>
    <div id="category-container" class="icon-title no-margin">
      <i class="material-symbols-outlined">category</i>
      <h3>{{ data.category }}</h3>
    </div>

    <hr />

    <!-- REPETITIONS -->
    <div id="repetitions-container">
      <div class="icon-title">
        <h3>Repetitions</h3>
      </div>
      <div class="bubble-container">
        <button class="bubble" @click="openModal" touchy>{{ data.repetitions || 8 }}x</button>
        <button class="bubble" @click="openModal" touchy>{{ data.cooldown || 30 }}s</button>
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

    <!-- INSTRUCTIONS -->
    <div id="instructions-container">
      <h2>Instructions</h2>
      <p v-for="(step, i) in data.steps" :key="i" v-html="step.replace(/^([\w\s\-]+:)/, '<b>$1</b>')"></p>
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

    <!-- MODAL -->
    <Modal v-if="modalOpen" @CLOSE="closeModal" @SUBMIT="submitPrefs">
      <div id="settings-container">
        <div class="flex-center">
          <h3>Repetitions:</h3>
          <NumberSelect :min="1" :max="99" :step="1" :initialValue="data.repetitions || 8" ref="reps" />
          <!-- TODO: vue model? -->
        </div>

        <hr />

        <div class="flex-center">
          <h3>Cooldown:</h3>
          <NumberSelect :min="10" :max="300" :step="10" :initialValue="data.cooldown || 30" ref="cldn" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Modal from '@/components/Modal.vue';
import NumberSelect from '@/components/NumberSelect.vue';

import { store } from '@/store';

// import EXERCISES from '@/assets/exercises.json';

export default {
  name: 'Exercise',
  components: {
    Hero,
    Modal,
    NumberSelect,
  },
  data() {
    return {
      store,

      imageSrc: '',
      data: {},

      modalOpen: false,
    };
  },
  props: {
    id: Number,
  },
  beforeMount() {
    // get data on load:
    this.data = this.store.exercises.find((e) => e.id == (this.id || this.$route.params.id));
    console.log(this.data);

    // set image src from data
    this.imageSrc = 'img/ex/' + this.data.id + '-1.jpg';
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },

    closeModal() {
      this.modalOpen = false;
    },

    submitPrefs() {
      // SUBMIT, UPDATE STORE, SET LOCALSTORAGE
      this.data.repetitions = this.$refs.reps.value;
      this.data.cooldown = this.$refs.cldn.value;

      // CLOSE
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins.scss';

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

#repetitions-container .bubble {
  @include button(#eee);

  // font-weight: 500;
  // cursor: pointer;
  border: none;
}

#body {
  position: relative;
  padding: var(--app-padding);
  display: flex;
  flex-direction: column;
  gap: 20px;

  #do_exercise_btn {
    position: absolute;
    right: var(--app-padding);
    top: 0px;
    transform: translateY(-50%);

    button {
      @include button(white);
      border-radius: 50px;
      padding: 5px;
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

  #modal {
    #settings-container {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        justify-content: space-between;
      }
    }
  }
}
</style>
