<template>
  <div>
    <Head />
    <About />
    <Featured />
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import Featured from '~/components/Featured.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Head,
    Featured,
    About
  }
}
</script>

<style>

</style>
