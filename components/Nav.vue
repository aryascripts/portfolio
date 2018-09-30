<template lang="html">
  <div
    v-bind:class="{ 'trans-gray': darkNav }"
    class="nav">
    <div class="section nav-items">
      <nuxt-link to="/" exact
        class="pointer item">home</nuxt-link>
      <nuxt-link to="/work" exact
        class="pointer item">work</nuxt-link>
      <nuxt-link to="/about" exact
        class="pointer item">about</nuxt-link>
      <nuxt-link to="/connect" exact
        class="pointer item">connect</nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  data: () => {
    return {
      darkNav: false
    }
  },
  methods: {
    getBackgroundColor: function(event) {
      const scrollTop = event.target.scrollingElement.scrollTop;
      this.darkNav = scrollTop > 100 ? true : false;
    },
    dark: () => {
      return 'DARK NAVs' + this.darkNav;
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.getBackgroundColor);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getBackgroundColor);
  }
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.nav {
  width: 100%;
  height: 6vh;
  position: fixed;
  top: 0;
  z-index: $nav-z;

  @include transition(background 800ms ease-in-out);

  .nav-items {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 6vh;
    max-width: $nav-max-width;
    margin: 0 auto;
  }
}

.item {
  font-size: 2.5vmax;
  font-family: 'Arial Black', sans-serif;
  color: $green-light;
  height: 6vh;
  line-height: 6vh;
  padding: 0 15px;
  position: relative;
  text-decoration: none;

  transition: color 150ms ease-in-out;

  &:hover {
    color: $green-hover;
  }
}

.trans-gray {
  background: rgba(0, 0, 0, 0.5);
}
</style>
