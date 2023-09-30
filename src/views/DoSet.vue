<template>
  <DoExercise :id="data.id" v-if="!cooldown" @START_COOLDOWN="startCooldown" :currentSet="currentSet" :sets="sets" />
  <Cooldown v-if="cooldown" :id="data.id" :seconds="cooldown" :next="next" @END_COOLDOWN="endCooldown" />
</template>

<script>
import DoExercise from './DoExercise.vue';
import Cooldown from './Cooldown.vue';

import { store } from '@/store';

export default {
  name: 'DoSet',
  components: {
    DoExercise,
    Cooldown,
  },
  props: {
    id: Number,
    nextId: Number,
  },
  data() {
    return {
      store,

      data: {}, // current exercise data

      sets: 4,
      currentSet: 1, // 1 => 4

      cooldown: 0, // 30
      interval: null,
    };
  },
  computed: {
    next() {
      // if (!this.cooldown) return 'Cooldown';

      // current screen is Cooldown
      if (this.currentSet < this.sets) {
        return "I'm ready"; // i'm ready for next set
      }

      // TODO: doing last set: if there is next exercise (DoWorkout mode) return its id; else return 'FINISHED'
      return 'Finished';
    },
  },
  beforeMount() {
    this.data = this.store.exercises.find((e) => e.id == this.$route.params.id);
    // this.data.exercises = this.data.exercises.map((ex) => this.store.exercises.find((e) => e.id === ex.id));
    // console.log(this.data.exercises);
  },
  methods: {
    startCooldown() {
      this.cooldown = this.data.cooldown || 30; // 30
      this.interval = setInterval(() => {
        this.cooldown--;
        if (!this.cooldown) clearInterval(this.interval);
      }, 1000);
    },
    endCooldown() {
      clearInterval(this.interval);
      this.cooldown = 0;

      if (this.currentSet < this.sets) {
        this.currentSet++;
      } else {
        // TODO: if next exercise emit next exercise (also inject next card); if last exercise, go to exercise page
        if (false /* if next exercise */) {
          this.$emit('END_EXERCISE');
        } else {
          console.log('GO TO EXERCISE');
          this.$router.push({ name: 'Exercise', params: { id: this.data.id } });
        }
      }
    },
  },
};
</script>
