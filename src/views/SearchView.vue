<template>
  <div id="search">
    <Header title="Iskanje" />

    <!-- <em>Napravi po spotifyju mogoce?</em> -->
    <div id="input-container" class="flex-center">
      <input type="text" placeholder="iskanje .." />
      <button type="submit">ok</button>
    </div>

    <div id="search-results-container">
      <!-- <em>nalaganje ..</em> -->
      <p>rezultati: 101</p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
#search-results-container {
  padding: var(--app-padding);
}

#input-container {
  background: #eee;
  padding: var(--app-padding);

  input,
  button {
    padding: 5px 10px;
    text-transform: uppercase;
    // height: 20px;
    box-sizing: content-box;

    border-radius: 0;
  }

  input {
    flex-grow: 1;
    margin-right: 1rem;
  }
}
</style>
