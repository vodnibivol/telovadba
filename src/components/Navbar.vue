<template>
  <div id="navbar-container">
    <nav>
      <router-link to="/" touchy>
        <i class="material-symbols-outlined">exercise</i>
      </router-link>
      |
      <router-link to="/search" touchy>
        <i class="material-symbols-outlined">search</i>
      </router-link>
      |
      <router-link to="/profile" touchy>
        <i class="material-symbols-outlined">account_circle</i>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
#navbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  // padding-bottom: max(12px, env(safe-area-inset-bottom, 0px));
  // padding-top: 12px;
  background: #eee;
}

nav {
  // height: 50px;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    font-weight: bold;
    color: #aaa;

    padding-bottom: max(12px, env(safe-area-inset-bottom, 0px));
    padding-top: 12px;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none !important;

    &.router-link-exact-active {
      color: #444;
    }

    &[data-touched] {
      background: darken(#eee, 5);
    }
  }
}
</style>
