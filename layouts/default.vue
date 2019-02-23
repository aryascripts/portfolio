<template>
  <div>
    <Nav />

    <nuxt />

    <Footer />
  </div>
</template>


<script>
import Footer from './../components/Footer.vue'
import Nav from './../components/Nav.vue'
export default {
  components: {
    Footer,
    Nav
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

</style>
