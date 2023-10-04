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
          <h1 class="num">
            <p class="digit" v-for="d in seconds.toString()">{{ d }}</p>
          </h1>
        </div>
        <em>Relax</em>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cards/Card.vue';

export default {
  name: 'Cooldown',
  props: {
    initSeconds: Number,
    // next: [Number, String], // 'NEXT_SET', id or 'FINISHED'
    id: Number,
  },
  components: {
    Card,
  },
  data() {
    return {
      seconds: this.initSeconds || 30, // 30
      interval: null,
    };
  },
  mounted() {
    this.startCooldown();
  },
  methods: {
    startCooldown() {
      this.interval = setInterval(() => {
        this.seconds--;
        if (!this.seconds) this.endCooldown()
      }, 1000);
    },
    endCooldown() {
      clearInterval(this.interval);
      this.seconds = 0;
      this.$emit('END_COOLDOWN');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/_mixins';

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
        align-self: baseline;
        font-size: 80px;
        font-weight: 300;
        
        .digit {
          font-size: inherit;
          font-weight: inherit;
          // border: 1px solid pink;
          margin: 0;
          padding: 0;
          display: inline-block;
          
          &:last-of-type {
            width: 45px !important; // tečno je samo ko se na vsako sekundo spremeni
          }
        }
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

  // #upnext-container {
  //   // border: 2px solid;
  //   box-shadow: 0 0 15px #00000033;
  //   border-radius: 5px;
  //   overflow: hidden;
  // }

  // #cooldown-btn-container {
  //   display: flex;
  //   justify-content: center;

  //   button {
  //     @include button(lightsteelblue);
  //     width: 60%;
  //     padding: 7px 10px 7px 15px;
  //     border-radius: 50px;
  //     text-transform: uppercase;
  //     font-weight: 700;

  //     display: flex;
  //     justify-content: space-around; // around/evenly
  //     align-items: center;
  //     // gap: 10px;
  //   }
  // }
}
</style>
