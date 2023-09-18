<template>
  <div id="header-container">
    <h1>{{ title || 'Title' }}</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    title: String,
    backgroundImage: String,
  },
};
</script>

<style lang="scss" scoped>
#header-container {
  text-align: center;
  background: lightsteelblue;
  padding: var(--app-padding);
}
</style>
