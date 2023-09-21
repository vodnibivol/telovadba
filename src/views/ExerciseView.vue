<template>
  <Hero :title="data.title || 'Vaja'" :imageSrc="imageSrc">
    <!-- SLOT for back -->
    <div id="buttons-container">
      <router-link id="back-link" @click.prevent="$router.go(-1)" to="#">
      <!-- <router-link id="back-link" to="/search"> -->
        <i class="material-symbols-outlined">arrow_back</i>
      </router-link>
      <i class="material-symbols-outlined">more_vert</i>
    </div>
  </Hero>

  <div id="exercise-details-container" v-if="data">
    <div id="difficulty-container" class="icon-title no-margin">
      <i class="material-symbols-outlined">signal_cellular_alt</i>
      <h3>{{ data.difficulty }}</h3>
    </div>
    <div id="category-container" class="icon-title no-margin">
      <i class="material-symbols-outlined">category</i>
      <h3>{{ data.category }}</h3>
    </div>

    <hr />

    <div id="repetitions-container">
      <div class="icon-title">
        <h3>Repetitions</h3>
      </div>
      <div class="bubble-container">
        <span class="bubble">6x</span>
        <span class="bubble">30s</span>
      </div>
    </div>

    <hr />

    <div id="equipment-container">
      <div class="icon-title">
        <i class="material-symbols-outlined">exercise</i>
        <h3>Equipment:</h3>
      </div>
      <em v-if="!data.equipment">No equipment needed.</em>
      <p v-if="data.equipment">{{ data.equipment }}</p>
    </div>

    <hr />

    <div id="instructions-container">
      <h2>Instructions</h2>
      <p v-for="(step, i) in data.steps" :key="i" v-html="step.replace(/^([\w\s\-]+:)/, '<b>$1</b>')"></p>
    </div>

    <hr />

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
import EXERCISES from '@/assets/exercises.json';
// import { baseUrl } from '@/store';

export default {
  name: 'Exercise',
  components: {
    Hero,
  },
  data() {
    return {
      // baseUrl,

      imageSrc: '',
      data: {},
    };
  },
  mounted() {
    // get all data and load:
    this.data = EXERCISES.find((e) => e.id == this.$route.params.id);
    console.log({ ...this.data });

    // IMAGE
    this.imageSrc = 'img/ex/' + this.data.id + '-1.jpg';
  },
};
</script>

<style lang="scss" scoped>
#exercise-details-container {
  padding: var(--app-padding);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

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

#equipment-container {
  p {
    color: #bbb;
  }
}

#instructions-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

// * {
//   border: 1px solid pink;
// }

.icon-title {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;

  &.no-margin {
    margin-bottom: 0;
  }

  h3 {
    font-weight: 500; // 400|500
    // font-size: 18px;
    align-self: end;
  }
}
</style>
