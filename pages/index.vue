<template>
  <div>
    <Head
      v-bind:config="{ title: title, name: name }" />
    <About />
    <Featured />
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import Featured from '~/components/Featured.vue'
import About from '~/components/About.vue'
import axios from './../plugins/axios'

export default {
  components: {
    Head,
    Featured,
    About
  },
  async asyncData() {
    const { data } = await axios.get('/api/site/settings');
    return {
      title: data.title,
      name: data.name
    }
  }
}
</script>

<style>

</style>
