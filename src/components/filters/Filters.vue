<template>
  <div id="filter-container">
    <div id="difficulty-select">
      <button @click="openModal('difficulty')" touchy>
        <span>Difficulty</span>
        <i class="material-symbols-outlined md-20">add</i>
      </button>
    </div>

    <div id="body-part-select">
      <button @click="openModal('bodyPart')" touchy>
        <span>Body Part</span>
        <i class="material-symbols-outlined md-20">add</i>
      </button>
    </div>

    <div id="equipment-select">
      <button @click="openModal('equipment')" touchy>
        <span>Equipment</span>
        <i class="material-symbols-outlined md-20">add</i>
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

  <!-- pass the event to the -->
  <Modal v-if="modalOpen" @CLOSE="closeModal" @SUBMIT="submitPrefs">
    <!-- SLOT -->
    <div class="options">
      <template v-for="(val, i) in categoryValues" :key="i">
        <label class="option" :for="val"
          >{{ val }}
          <input type="checkbox" :value="val" :id="val" v-model="selectedValues[filterCateg]" />
          <i class="material-symbols-outlined md-20 md-dark">check</i>
        </label>
      </template>
    </div>
  </Modal>
</template>

<script>
import Modal from '../Modal.vue';
import { store } from '@/store';

export default {
  name: 'Filters',
  components: {
    Modal,
  },
  methods: {
    openModal(categoryName) {
      this.modalOpen = true;
      this.filterCateg = categoryName;
      this.categoryValues = this[categoryName];
    },
    closeModal() {
      this.modalOpen = false;
    },
    submitPrefs() {
      console.log(this.selectedValues);
      this.store.selectedFilters[this.filterCateg] = this.selectedValues[this.filterCateg];
      this.closeModal();
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
      categoryValues: [],
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
@import '@/assets/css/_mixins';

button {
  @include button(#f6f6f6);

  padding: 5px 7px;
  width: 100%; // TODO: manjši so lepši
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;

  font-weight: 500;

  border-color: var(--text-black);
  color: var(--text-black);
}

#filter-container {
  z-index: 100; // same as #search-container
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

<!-- MODAL STYLES -->
<style lang="scss">
#modal {
  .options {
    // border: 2px solid;
    overflow: scroll;

    label.option {
      position: relative;

      padding: 10px;
      cursor: pointer;
      font-weight: 500;

      display: flex;
      justify-content: space-between;
      align-items: center;

      // bottom line
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid #eee;
        width: 100%;
      }
    }

    input[type='checkbox'] {
      display: none;

      & ~ i {
        opacity: 0.2;
      }

      &:checked ~ i {
        opacity: 1;
      }
    }
  }
}
</style>
