<template>
  <nav>
    <router-link to="/">
      <span class="material-symbols-outlined">exercise</span>
    </router-link>
    |
    <router-link to="/search">
      <span class="material-symbols-outlined">search</span>
    </router-link>
    |
    <router-link to="/profile">
      <span class="material-symbols-outlined">account_circle</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #eee; // TODO: remove
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  // * {
  //   border: 1px solid pink;
  // }

  a {
    font-weight: bold;
    color: #aaa;

    display: contents;

    &.router-link-exact-active {
      color: #444;
    }
  }
}
</style>
