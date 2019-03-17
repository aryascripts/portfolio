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
import SiteSettings from '~/requests/site'

export default {
  components: {
    Head,
    Featured,
    About
  },
  async asyncData() {
    const data = await SiteSettings.getAll()
    return {
      title: data.title,
      name: data.name,
      about: data.about,
      quotes: data.quotes
    }
  }
}
</script>

<style>

</style>
