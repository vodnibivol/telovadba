<template>
  <DoExercise :id="data.id" v-if="!isCooldown" :currentSet="currentSet" :sets="sets">
    <div id="cooldown-btn-container">
      <button @click="startCooldown" touchy>
        <h4>Cooldown</h4>
        <i class="material-symbols-outlined">arrow_forward</i>
      </button>
    </div>
  </DoExercise>

  <Cooldown v-if="isCooldown" :id="data.id" :initSeconds="data.cooldown" @END_COOLDOWN="endCooldown">
    <!-- UP NEXT/COUNTDOWN -->
    <div id="cooldown-btn-container" v-if="currentSet < sets || !nextId">
      <button @click="endCooldown" touchy>
        <h4>{{ next }}</h4>
        <i class="material-symbols-outlined">arrow_forward</i>
      </button>
    </div>

    <div id="upnext-container" v-if="currentSet === sets && nextId">
      <Card
        :imgSrc="baseUrl + 'img/ex/' + nextId + '-1.jpg'"
        title="Up Next"
        :subtitle="nextTitle"
        @click="endSet"
      />
    </div>
  </Cooldown>
</template>

<script>
import DoExercise from './DoExercise.vue';
import Cooldown from './Cooldown.vue';
import Card from '@/components/cards/Card.vue';

import { store, baseUrl } from '@/store';

export default {
  name: 'DoSet',
  components: {
    DoExercise,
    Cooldown,
    Card,
  },
  props: {
    id: Number,
    nextId: Number,
  },
  beforeMount() {
    this.data = this.store.exercises.find((e) => e.id == (this.id || this.$route.params.id));
    if (!this.data) alert('NO DATA (BUG)');
  },
  data() {
    return {
      store,
      baseUrl,

      data: {}, // current exercise data

      sets: 4,
      currentSet: 3, // 1 => 4 // TODO: 1

      isCooldown: false,
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
      return 'Finish';
    },
    nextTitle() {
      return store.exercises.find((e) => e.id == this.nextId)?.title;
    },
  },
  methods: {
    startCooldown() {
      this.isCooldown = true;
    },
    endCooldown() {
      this.isCooldown = false;

      if (this.currentSet < this.sets) {
        return this.currentSet++;
      }

      if (this.nextId) {
        this.endSet();
      } else {
        console.log('GO TO EXERCISE');
        this.$router.push({ name: 'Exercise', params: { id: this.data.id } });
      }
    },
    endSet() {
      this.$emit('SET_END');
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins';

#upnext-container {
  // border: 2px solid;
  box-shadow: 0 0 15px #00000033;
  border-radius: 5px;
  overflow: hidden;
}

#cooldown-btn-container {
  display: flex;
  justify-content: center;

  button {
    @include button(lightsteelblue);
    width: 60%;
    padding: 7px 10px 7px 15px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 700;

    display: flex;
    justify-content: space-around; // around/evenly
    align-items: center;
    // gap: 10px;
  }
}
</style>
