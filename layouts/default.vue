<template>
  <div>
    <div class="nav">
      <div class="section nav-items">
        <nuxt-link to="/" class="pointer item">home</nuxt-link>
        <nuxt-link to="/work" class="pointer item">work</nuxt-link>
        <nuxt-link to="/about" class="pointer item">about</nuxt-link>
        <nuxt-link to="/connect" class="pointer item">connect</nuxt-link>
      </div>
    </div>
    <nuxt/>

    <Footer />
  </div>
</template>


<script>
import Footer from './../components/Footer.vue'
export default {
  components: {
    Footer
  }
}

</script>


<style lang="scss">
@import './../sass/global.scss';
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


@import './../sass/vars.scss';

.nav {
  width: 100%;
  height: 6vh;
  position: fixed;
  top: 0;
  z-index: $nav-z;

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
    color: darken($green-light, 10%);
  }
}
</style>
