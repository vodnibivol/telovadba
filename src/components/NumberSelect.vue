<template>
  <div id="number-select" class="flex-center">
    <button class="prev">
      <i class="material-symbols-outlined" @click="decrease" :class="{ inactive: value === min }">remove</i>
    </button>

    <input type="text" inputmode="numeric" @click="$event.target.select()" @change="onChange" v-model="value" />

    <button class="next">
      <i class="material-symbols-outlined" @click="increase" :class="{ inactive: value === max }">add</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NumberSelect',
  props: {
    min: Number,
    max: Number,
    step: Number,
    initialValue: Number,
  },
  data() {
    return {
      value: this.initialValue || 0,
    };
  },
  methods: {
    increase() {
      this.value = Math.min(this.value + this.step, this.max);
    },
    decrease() {
      this.value = Math.max(this.value - this.step, this.min);
    },
    onChange() {
      const rounded = Math.round(this.value / this.step) * this.step;
      this.value = Math.max(Math.min(this.max, rounded), this.min);
    },
  },
};
</script>

<style lang="scss" scoped>
#number-select {
  // max-width: 30px;

  button {
    display: contents;

    i.inactive {
      color: rgba(0, 0, 0, 0.26);
    }
  }

  input[type='text'] {
    // appearance: none;
    width: 40px;
    text-align: center;
    font-size: 22px;
    border: none;
  }
}
</style>
