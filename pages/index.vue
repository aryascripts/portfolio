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
const SiteData = require('~/requests/content.js')

export default {
  components: {
    Head,
    Featured,
    About
  },
  async asyncData() {
    return {
      title: SiteData.getTitle(),
      name: SiteData.getName(),
      about: Site.getAboutText()
    }
  }
}
</script>

<style>

</style>
