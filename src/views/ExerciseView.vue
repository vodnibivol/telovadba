<template>
  <Hero :title="data.title || 'Exercise'" :imageSrc="imageSrc">
    <!-- SLOT for back -->
    <div id="buttons-container">
      <router-link id="back-link" @click.prevent="$router.go(-1)" to="#">
        <!-- <router-link id="back-link" to="/search"> -->
        <i class="material-symbols-outlined">arrow_back</i>
      </router-link>
      <i class="material-symbols-outlined disabled">more_vert</i>
    </div>
  </Hero>

  <div id="body">
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
        <!-- TODO -->
        <button class="bubble" @click="openModal">6x</button>
        <button class="bubble" @click="openModal">30s</button>
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
          <NumberSelect :min="1" :max="99" :step="1" :defaultVal="data.repetitions || 6" ref="reps" />
          <!-- TODO: namesto defaultVal da je kar value? -->
        </div>

        <hr />

        <div class="flex-center">
          <h3>Cooldown:</h3>
          <NumberSelect :min="0" :max="300" :step="10" :defaultVal="data.cooldown || 30" ref="cldn" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Modal from '@/components/Modal.vue';
import NumberSelect from '@/components/NumberSelect.vue';

import EXERCISES from '@/assets/exercises.json';

export default {
  name: 'Exercise',
  components: {
    Hero,
    Modal,
    NumberSelect,
  },
  data() {
    return {
      imageSrc: '',
      data: {},

      modalOpen: true,
    };
  },
  mounted() {
    // get data on load:
    this.data = EXERCISES.find((e) => e.id == this.$route.params.id);
    this.data.repetitions = 10;

    // set image src from data
    this.imageSrc = 'img/ex/' + this.data.id + '-1.jpg';
  },
  methods: {
    openModal() {
      this.modalOpen = true;

      // TODO: on change: naredi, da se ko kliknes applyja. pa potem spremeni še pri filtrih
    },

    closeModal() {
      // TODO: apply changes
      this.modalOpen = false;
    },

    submitPrefs() {
      const repetitions = this.$refs.reps.value;
      const cooldown = this.$refs.cldn.value;

      console.log(repetitions, cooldown);

      // TODO: "TD_EXERCISE_PREFS" => add { repetitions, cooldown }
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
  padding: var(--app-padding);
  display: flex;
  flex-direction: column;
  gap: 20px;

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

  #modal {
    #settings-container {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        justify-content: space-between;

        // input {
        //   width: 52px;
        //   padding: 2px 4px;
        //   appearance: initial;
        // }
      }
    }
  }
}
</style>
