<template lang="html">
  <div class="nav">

    <div class="logo">
      <Logo
        v-bind:fillColor="'#4F86C6'" />
    </div>

    <Primary
      v-bind:type="'primary'"
      v-bind:text="'Reach Out'" />
  </div>
</template>

<script>
import Primary from './Primary.vue'
import Logo from './Logo.vue'

export default {
  components: {
    Primary,
    Logo
  },
  data: () => {
    return {
      darkNav: false
    }
  },
  methods: {

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
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: $nav-z;
  padding: 0 2vw;
  align-items: center;

  .hello {
    align-self: flex-end;
  }

  .logo {
    width: 42px;
  }
}
</style>
