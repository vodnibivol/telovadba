<template>
  <div id="do-exercise-container">
    <div id="buttons-container">
      <router-link id="back-link" :to="{ name: 'Exercise', params: { id } }">
        <i class="material-symbols-outlined">close</i>
      </router-link>
    </div>

    <div id="body">
      <!-- <p class="sets">Set {{ currentSet }} of {{ sets || 4 }}</p> -->

      <div id="reps-container" class="flex-center">
        <div class="text-container">
          <h1 class="num">{{ seconds }}</h1>
        </div>
        <em>Relax</em>
      </div>

      <!-- UP NEXT/COUNTDOWN -->
      <div id="cooldown-btn-container" v-if="!parseInt(next)">
        <button touchy @click="$emit('END_COOLDOWN')">
          <h4>{{ next }}</h4>
          <i class="material-symbols-outlined">arrow_forward</i>
        </button>
      </div>

      <div id="upnext-container" v-if="parseInt(next)">
        <Card title="Up Next" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cards/Card.vue';

export default {
  name: 'Cooldown',
  props: {
    seconds: Number,
    next: [Number, String], // 'NEXT_SET', id or 'FINISHED'
    id: Number,
  },
  data() {
    return {};
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins.scss';

#do-exercise-container {
  // background: red;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#buttons-container {
  padding: var(--app-padding);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}

#body {
  position: relative;

  padding: var(--app-padding);
  flex-grow: 1;
  // background: lightsalmon;
  display: flex;
  flex-direction: column;

  p.sets {
    text-align: end;
    color: var(--text-soft);
    position: absolute;
    right: var(--app-padding);
    // font-weight: normal;
  }

  #reps-container {
    // background: lightblue;
    flex-grow: 1;
    height: 200px;
    flex-direction: column;

    .text-container {
      display: flex;
      justify-content: center;

      h1.num {
        font-size: 80px;
        font-weight: 300;
        align-self: baseline;
      }

      span {
        font-size: 50px;
        font-weight: 500;
        align-self: baseline;
      }
    }

    em {
      margin-top: 10px;
    }
  }

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
}
</style>
