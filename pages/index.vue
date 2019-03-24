<template>
  <div>

    <div class="head-nav">
      <Nav />
      <Head v-bind:config="{ title: title, name: name }" />
    </div>

    <About v-bind:about="about"/>

    <Featured v-bind:projects="featured"/>
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import Featured from '~/components/Featured.vue'
import About from '~/components/About.vue'
import SiteData from '~/requests/content.js'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Head,
    Featured,
    About,
    Nav
  },
  async asyncData() {
    return {
      title: SiteData.getTitle(),
      name: SiteData.getName(),
      about: SiteData.getAboutText(),
      featured: SiteData.getFeaturedProjects()
    }
  }
}
</script>

<style scoped lang="scss">
  .head-nav {
    background: #4f86c6; /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover, #4f86c6 34%, #4778b2 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover, #4f86c6 34%,#4778b2 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center, #4f86c6 34%,#4778b2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4f86c6', endColorstr='#4778b2',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }


</style>
