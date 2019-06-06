<template lang="html">
  <div
    class="nav"
    v-bind:style="{'background-color': bgColor}">

    <nuxt-link to="/" class="logo">
      <Logo
        v-bind:fillColor="'#f1ffe7'" />
    </nuxt-link>

    <div class="right-menu">
      <Primary
        class="reach-out"
        v-bind:type="'primary'"
        v-bind:text="'Reach Out'" />

      <nuxt-link to="/about" class="item">
        About
      </nuxt-link>

      <nuxt-link to="/work" class="item">
        Work
      </nuxt-link>
    </div>

  </div>
</template>

<script>
import Primary from './Primary.vue'
import Logo from './Logo.vue'

export default {
  props: [ 'bgColor' ],
  components: { Primary, Logo }
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.nav {
  width: 100%;
  height: 10vh;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: $content-z;
  padding: 0 2vw;
  align-items: center;

  .hello {
    align-self: flex-end;
  }

  .logo {
    width: 42px;
    background-color: transparent;
  }

  .right-menu {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-items: center;

    .item {
      margin-right: 25px;
      cursor: pointer;
      z-index: $content-z;
      background-color: transparent;
      @extend %header-font;
      font-weight: 600;
    }
  }
}

.reach-out {
  z-index: $content-z;
}
</style>
