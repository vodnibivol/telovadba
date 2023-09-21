<template>
  <div id="filter-container">
    <div id="difficulty-select">
      <button @click="openModal('difficulty')">
        <span>Difficulty</span>
        <i class="material-symbols-outlined md-18">add</i>
      </button>
    </div>

    <div id="body-part-select">
      <button @click="openModal('bodyPart')">
        <span>Body Part</span>
        <i class="material-symbols-outlined md-18">add</i>
      </button>
    </div>

    <div id="equipment-select">
      <button @click="openModal('equipment')">
        <span>Equipment</span>
        <i class="material-symbols-outlined md-18">add</i>
      </button>
    </div>

    <!-- show selected -->
    <div class="bubble-container" v-if="filtersAreApplied">
      <div
        class="bubble blue-1"
        v-for="prop in store.selectedFilters.difficulty"
        @click="removeItem('difficulty', prop)"
        :key="prop"
      >
        {{ prop }}
      </div>
      <div
        class="bubble blue-2"
        v-for="prop in store.selectedFilters.bodyPart"
        @click="removeItem('bodyPart', prop)"
        :key="prop"
      >
        {{ prop }}
      </div>
      <div
        class="bubble blue-3"
        v-for="prop in store.selectedFilters.equipment"
        @click="removeItem('equipment', prop)"
        :key="prop"
      >
        {{ prop }}
      </div>
    </div>
  </div>

  <FilterModal
    :values="modalValues"
    :name="modalName"
    v-if="modalOpen"
    @CLOSE_MODAL="closeModal"
  />
</template>

<script>
import FilterModal from '@/components/filters/FilterModal.vue';
import { store } from '@/store';

export default {
  name: 'Filters',
  components: {
    FilterModal,
  },
  methods: {
    openModal(propName) {
      this.modalOpen = true;
      this.modalValues = this[propName];
      this.modalName = propName;

      document.body.classList.add('modal-open');
    },
    closeModal() {
      this.modalOpen = false;
      document.body.classList.remove('modal-open');
    },
    onValueChange(propName, selectedValues) {
      this.selectedValues[propName] = selectedValues;
    },
    removeItem(propName, item) {
      this.store.selectedFilters[propName] = this.store.selectedFilters[propName].filter((i) => i !== item);
    },
  },
  computed: {
    filtersAreApplied() {
      return (
        this.store.selectedFilters.difficulty.length ||
        this.store.selectedFilters.bodyPart.length ||
        this.store.selectedFilters.equipment.length
      );
    },
  },
  data() {
    return {
      store,

      modalOpen: false,
      modalValues: [],
      selectedValues: {
        difficulty: [],
        bodyPart: [],
        equipment: [],
      },

      // --- options
      difficulty: ['Beginner', 'Intermediate', 'Advanced'],
      bodyPart: [
        'Abs',
        'Arms',
        'Back',
        'Butt/Hips',
        'Chest',
        'Full Body/Integrated',
        'Legs - Calves and Shins',
        'Neck',
        'Shoulders',
        'Legs - Thighs',
      ],
      equipment: [
        'Dumbbells',
        'Barbell',
        'Bench',
        'Resistance Bands/Cables',
        'BOSU Trainer',
        'TRX',
        'Raised Platform/Box',
        'Stability Ball',
        'Medicine Ball',
        'No Equipment',
        'Cones',
        'Weight Machines / Selectorized',
        'Pull up bar',
        'Ladder',
        'Hurdles',
        'Kettlebells',
        'Heavy Ropes',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 5px 7px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;

  font-weight: 500;

  background: #f6f6f6;
  border-color: var(--color-black);
  color: var(--color-black);

  i {
    vertical-align: middle;
  }
}

#filter-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: sticky;
  top: 70px;
  background: #fafafa;
}

.bubble-container {
  // background: lightpink;
  margin-top: 10px;

  .bubble {
    border: 2px solid;
    background: lightblue;
    cursor: pointer;

    &.blue-1 {
      background: hsl(195, 53%, 95%);
    }

    &.blue-2 {
      background: hsl(195, 53%, 85%);
    }

    &.blue-3 {
      background: hsl(195, 53%, 75%);
    }
  }
}
</style>
