<template>
  <Teleport to="#modals">
    <div id="modal">
      <div class="backdrop" @click.self="$emit('CLOSE')"></div>

      <div class="card">
        <slot></slot>

        <button type="submit" @click="$emit('SUBMIT')" touchy>{{ btnMsg || 'Apply' }}</button>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'Modal',
  props: {
    name: String,
    values: Array,
    btnMsg: String,
  },
  emits: ['CLOSE', 'SUBMIT'],
  beforeMount() {
    document.body.classList.add('modal-open');
  },
  beforeUnmount() {
    document.body.classList.remove('modal-open');
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
#modal {
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

    button {
      width: 100%;
      margin-top: 15px;
      padding: 5px 7px;
      border-radius: 50px;
      border-color: var(--text-black);
      color: var(--text-black);
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
