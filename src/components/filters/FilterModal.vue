<template>
  <div id="filter-modal">
    <div class="backdrop" @click.self="closeModal"></div>

    <div class="card">
      <div class="options">
        <template v-for="(val, i) in values" :key="i">
          <label class="option" :for="val"
            >{{ val }}
            <input type="checkbox" :value="val" :name="val" :id="val" v-model="selectedValues" @click="toggle" />
            <i class="material-symbols-outlined md-18 md-dark">check</i>
          </label>
        </template>
      </div>

      <button type="submit" @click="submitChanges">Apply</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    values: Array,
  },
  name: 'FilterModal',
  data() {
    return {
      selectedValues: [],
    };
  },
  methods: {
    submitChanges() {
      this.$emit('CLOSE_MODAL');
      this.$emit('VALUES_CHANGED', this.name, this.selectedValues);
    },
    closeModal() {
      this.$emit('CLOSE_MODAL');
    },
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

      input[type="checkbox"] {
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
