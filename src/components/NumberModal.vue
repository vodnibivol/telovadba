<!-- FIXME: !!! -->

<template>
  <div id="number-modal">
    <Modal :name="123" :values="34567">
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

      <button type="submit" @click="$emit('CLOSE_MODAL')">Apply</button>
    </Modal>
  </div>
</template>

<script>
import { store } from '@/store';
import Modal from './Modal.vue';

export default {
  name: 'NumberModal',
  components: {
    Modal,
  },
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
#filter-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffffdd;
  }

  .card {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border: 2px solid;
    border-bottom: none;
    padding: 20px;
    border-radius: 25px 25px 0 0;
    overflow: scroll;
    z-index: 100;
    max-height: 95%;

    display: flex;
    flex-direction: column;

    .options {
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

    button {
      width: 100%;
      margin-top: 15px;
      padding: 5px 7px;
      border-radius: 50px;
      border-color: var(--color-black);
      color: var(--color-black);
      text-transform: uppercase;
      font-weight: 500;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
