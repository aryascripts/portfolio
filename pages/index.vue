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
import SiteData from '~/requests/content.js'

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
      about: SiteData.getAboutText()
    }
  }
}
</script>

<style>

</style>
