<template>
  <div>
    <Head
      v-bind:config="{ title: title, name: name }" />

    <About
      v-bind:about="about"/>

    <Featured />
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import Featured from '~/components/Featured.vue'
import About from '~/components/About.vue'
import * as Site from './../content/site.json'

export default {
  components: {
    Head,
    Featured,
    About
  },
  async asyncData() {
    return {
      title: Site.title,
      name: Site.name,
      about: Site.about
    }
  }
}
</script>

<style>

</style>
