<template>
  <div id="do-exercise-container">
    <div id="buttons-container">
      <router-link id="back-link" :to="{ name: 'Exercise', params: { id: data.id }}">
        <i class="material-symbols-outlined">close</i>
      </router-link>
    </div>

    <div id="img-container">

      <img :src="baseUrl + `img/ex/${data.id}-${currentImg + 1}.jpg`" @click="playing = !playing" touchy />
      <!-- <i class="material-symbols-outlined">pause</i> -->
    </div>

    <div id="body-container">
      <p class="sets">Set {{ set }} of {{ data.sets || 4 }}</p>

      <div id="reps-container" class="flex-center">
        <div class="text-container">
          <h1 class="num">{{ data.repetitions || 8 }}</h1>
          <span>x</span>
        </div>
        <em>You can do it!</em>
      </div>

      <!-- <div id="upnext-container">
        <Card title="Up Next" />
      </div> -->
      <div id="cooldown-btn-container">
        <button touchy>
          <h4>Cooldown</h4>
          <i class="material-symbols-outlined">arrow_forward</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cards/Card.vue';
import { store, baseUrl } from '@/store';

export default {
  name: 'DoExercise',
  beforeMount() {
    this.data = store.exercises.find((e) => e.id == (this.id || this.$route.params.id));
    console.log({ ...this.data });
  },
  mounted() {
    // img cycle
    setInterval(() => {
      if (this.playing) this.currentImg = (this.currentImg + 1) % this.data.images_no;
    }, 1000);
  },
  props: {
    id: Number,
  },
  data() {
    return {
      store,
      baseUrl,

      data: {},

      set: 1,
      currentImg: 1,
      playing: true,
    };
  },
  components: { Card },
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
  color: white;
  opacity: 0.5;
}

#img-container {
  flex-shrink: 0;

  position: relative;
  background: black;
  // height: 200px;
  max-height: 230px;
  overflow: hidden;
  display: flex;


  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    cursor: pointer;
    opacity: 0.9;
    // border: 2px solid red;

    &[data-touched] {
      opacity: 0.8;
    }
  }

  i {
    position: absolute;
    bottom: 4px;
    left: 0;
    color: white;
    // background: black;
    padding: 5px;
    // margin: 5px;
  }
}

#body-container {
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
