<!-- NOTE: DELETED! -->
<!-- preveč zahtevno je bilo passat evente in props med njimi ... -->

<template>
  <div id="filter-modal">
    <!-- pass the event to the -->
    <Modal @CLOSE_MODAL="$emit('CLOSE_MODAL')">
      <!-- SLOT -->
      <div class="options">
        <template v-for="(val, i) in values" :key="i">
          <label class="option" :for="val"
            >{{ val }}
            <input
              type="checkbox"
              :value="val"
              :name="val"
              :id="val"
              v-model="store.selectedFilters[name]"
              @click="toggle"
            />
            <i class="material-symbols-outlined md-18 md-dark">check</i>
          </label>
        </template>
      </div>
    </Modal>
  </div>
</template>

<script>
import { store } from '@/store';
import Modal from '../Modal.vue';

export default {
  name: 'FilterModal',
  components: { Modal },
  props: {
    name: String,
    values: Array,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
#filter-modal .card .options {
  // border: 2px solid;
  overflow: scroll;

  label.option {
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
    font-weight: 500;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &.selected {
      // background: #aaf;
      color: #085;
    }

    &:not(:last-child)::after {
      content: '';
      border-bottom: 1px solid #eee;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  input[type='checkbox'] {
    appearance: checkbox !important;
    display: none;

    & ~ i {
      opacity: 0.2;
      // color: #ddd;
    }

    &:checked ~ i {
      opacity: 1;
      // color: inherit;
    }
  }

  hr {
    width: 50%;
  }
}
</style>
