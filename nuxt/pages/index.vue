<template>
  <div>
    <Nav />
    <Head />
    <Featured />
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import Nav from '~/components/Nav.vue'
import Featured from '~/components/Featured.vue'

export default {
  components: {
    Head,
    Nav,
    Featured
  }
}
</script>

<style>

</style>
