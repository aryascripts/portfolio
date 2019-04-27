<template lang="html">
  <div
    class="nav"
    v-bind:style="{'background-color': bgColor}">

    <nuxt-link to="/" class="logo">
      <Logo
        v-bind:fillColor="'#f1ffe7'" />
    </nuxt-link>

    <Primary
      class="reach-out"
      v-bind:type="'primary'"
      v-bind:text="'Reach Out'" />
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
}

.reach-out {
  z-index: $content-z;
}
</style>
