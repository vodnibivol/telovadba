<template>
  <div id="filter-container">
    <div id="difficulty-select">
      <button @click="openModal('difficulty')">
        <span>Difficulty</span>
        <i class="material-symbols-outlined">expand_more</i>
      </button>
    </div>

    <div id="body-part-select">
      <button @click="openModal('bodyPart')">
        <span>Body Part</span>
        <i class="material-symbols-outlined">expand_more</i>
      </button>
    </div>

    <div id="equipment-select">
      <button @click="openModal('equipment')">
        <span>Equipment</span>
        <i class="material-symbols-outlined">expand_more</i>
      </button>
    </div>

    <!-- show selected -->
    <div class="bubble-container" v-if="filtersAreApplied">
      <div
        class="bubble blue-1"
        v-for="prop in selectedValues.difficulty"
        @click="removeItem('difficulty', prop)"
        :key="prop"
      >
        {{ prop }}
      </div>
      <div
        class="bubble blue-2"
        v-for="prop in selectedValues.bodyPart"
        @click="removeItem('bodyPart', prop)"
        :key="prop"
      >
        {{ prop }}
      </div>
      <div
        class="bubble blue-3"
        v-for="prop in selectedValues.equipment"
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
    @VALUES_CHANGED="onValueChange"
    @CLOSE_MODAL="this.modalOpen = false"
  />
</template>

<script>
// import EXERCISES from '@/assets/exercises.json';
import FilterModal from '@/components/filters/FilterModal.vue';

export default {
  name: 'Filters',
  emits: ['VALUES_CHANGED'],
  components: {
    FilterModal,
  },
  methods: {
    openModal(propName) {
      this.modalOpen = true;
      this.modalValues = this[propName];
      this.modalName = propName;
    },
    onValueChange(propName, selectedValues) {
      // console.log(propName, selectedValues);
      this.selectedValues[propName] = selectedValues;
      // console.log(this.selected);

      // EMIT TO PARENT
      this.$emit('VALUES_CHANGED', propName, selectedValues);
    },
    removeItem(propName, item) {
      this.selectedValues[propName] = this.selectedValues[propName].filter((i) => i !== item);
      this.$emit('VALUES_CHANGED', propName, this.selectedValues[propName]);
    },
  },
  computed: {
    filtersAreApplied() {
      return (
        this.selectedValues.difficulty.length ||
        this.selectedValues.bodyPart.length ||
        this.selectedValues.equipment.length
      );
    },
  },
  data() {
    return {
      modalOpen: false,
      modalValues: [],
      selectedValues: {
        difficulty: [],
        bodyPart: [],
        equipment: [],
      },

      // ---
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
  padding: 3px 7px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-radius: 3px;

  background: #eee;

  i {
    vertical-align: middle;
  }
}

#filter-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // background: lightsalmon;
}

.bubble-container {
  // background: lightpink;

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
