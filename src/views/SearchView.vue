<template>
  <div id="search">
    <Hero title="Search" imageSrc="/img/workout_3.jpeg" />

    <div id="input-container" class="flex-center">
      <input type="text" v-model="input" placeholder="iskanje .." />
      <i
        class="material-symbols-outlined md-dark"
        :class="{ 'md-inactive': !filtersShown }"
        @click="filtersShown = !filtersShown"
        >{{ filtersAreApplied ? 'filter_list' : 'filter_list_off' }}</i
      >
    </div>

    <Filters v-if="filtersShown" @VALUES_CHANGED="onValueChange" />

    <div id="search-results-container">
      <em>{{ filteredResults.length }} results <span v-if="filtersAreApplied">(Filters Applied)</span></em>
      <!-- <br /> -->

      <template v-for="w in filteredResults" :key="w.id">
        <hr />
        <ExerciseCard :id="w.id" :title="w.title" :category="w.category" />
      </template>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ExerciseCard from '@/components/ExerciseCard.vue';
import Filters from '@/components/filters/Filters.vue';

import EXERCISES from '@/assets/exercises.json';
console.log(EXERCISES[12]);

export default {
  components: {
    Hero,
    ExerciseCard,
    Filters,
  },
  emits: ['VALUES_CHANGED'],
  methods: {
    onValueChange(propName, selectedValues) {
      // console.log(propName, selectedValues);
      this.selectedValues[propName] = selectedValues;
      this.filtersShown = false;
      // console.log(this.selected);
    },
  },
  data() {
    return {
      input: '',
      filtersShown: false,

      selectedValues: {
        difficulty: [],
        bodyPart: [],
        equipment: [],
      },
    };
  },
  computed: {
    filtersAreApplied() {
      return (
        this.selectedValues.difficulty.length ||
        this.selectedValues.bodyPart.length ||
        this.selectedValues.equipment.length
      );
    },
    filteredResults() {
      const reg = new RegExp(this.input, 'i');
      return EXERCISES.filter((ex) => {
        if (!reg.test(ex.title)) return;

        const tsv = this.selectedValues;

        if (tsv.difficulty.length && !tsv.difficulty.includes(ex.difficulty)) return;
        if (tsv.bodyPart.length && !tsv.bodyPart.every((p) => ex.bodyPart.includes(p))) return;
        if (tsv.equipment.length && !tsv.equipment.includes(ex.equipment)) return;

        return true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#search-results-container {
  padding: var(--app-padding);

  display: flex;
  flex-direction: column;
  gap: 10px;
}

#input-container {
  background: #eee;
  padding: var(--app-padding);
  gap: 15px;
  position: sticky;
  top: 0;

  i {
    cursor: pointer;
  }

  input,
  button {
    padding: 5px 15px;
    text-transform: uppercase;
    // height: 20px;
    box-sizing: content-box;

    border-radius: 0;
  }

  input {
    flex-grow: 1;
    border-radius: 50px;
  }
}
</style>
