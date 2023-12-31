<template>
  <div id="search">
    <Hero title="Search" imageSrc="img/workout_3.jpeg" />

    <!-- INPUT -->
    <div id="input-container" class="flex-center">
      <input type="text" v-model="store.filterInput" placeholder="Filter results" />
      <i
        class="material-symbols-outlined md-dark"
        :class="{ 'md-inactive': !filtersShown }"
        @click="filtersShown = !filtersShown"
        >{{ filtersAreApplied ? 'filter_list' : 'filter_list_off' }}</i
      >
    </div>

    <!-- FILTERS -->
    <Filters v-if="filtersShown" />

    <!-- RESULTS -->
    <div id="search-results-container">
      <em>{{ filteredResults.length }} results <span v-if="filtersAreApplied">(Filters Applied)</span></em>

      <template v-for="w in filteredResults.slice(0, store.resultsLimit)" :key="w.id">
        <hr />
        <ExerciseCard :id="w.id" :title="w.title" :category="w.category" />
      </template>
      <hr />
      <br />

      <div id="load-more-container">
        <p>
          <em
            >Showing {{ Math.min(store.resultsLimit, filteredResults.length) }} of
            {{ filteredResults.length }} results</em
          >
        </p>
        <p v-if="store.resultsLimit < filteredResults.length">
          <a href="#" id="load-more" @click.prevent="loadMoreResults">load more</a>
        </p>
      </div>
    </div>

    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import ExerciseCard from '@/components/cards/ExerciseCard.vue';
import Filters from '@/components/filters/Filters.vue';

import { store } from '@/store';

import EXERCISES from '@/assets/exercises.json';

export default {
  components: {
    Navbar,
    Hero,
    ExerciseCard,
    Filters,
  },
  methods: {
    onValueChange(propName, selectedValues) {
      this.selectedValues[propName] = selectedValues;
    },
    loadMoreResults() {
      this.store.resultsLimit = Math.min(this.store.resultsLimit + this.resultsBatchSize, this.filteredResults.length);
    },
  },
  data() {
    return {
      store,

      filtersShown: false,

      resultsBatchSize: 12,

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
        this.store.selectedFilters.difficulty.length ||
        this.store.selectedFilters.bodyPart.length ||
        this.store.selectedFilters.equipment.length
      );
    },
    filteredResults() {
      const reg = new RegExp(this.store.filterInput, 'i');
      return EXERCISES.filter((ex) => {
        if (!reg.test(ex.title)) return;

        const tsv = this.store.selectedFilters;

        // body part: ITEM ima med bodyparti vsaj enega od iskanih
        // selected values >> ALL of them are in body part

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
#search {
  padding-bottom: 50px;
}

#input-container {
  background: #eee;
  padding: var(--app-padding);
  gap: 15px;
  position: sticky;
  top: 0;
  z-index: 100; // same as #input-container

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

#search-results-container {
  padding: var(--app-padding);

  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
}

#load-more-container {
  text-align: center;
  margin-bottom: 20px;

  p:first-child {
    margin-bottom: 10px;
  }

  a#load-more {
    font-weight: inherit;
    text-decoration: underline;
  }
}
</style>
