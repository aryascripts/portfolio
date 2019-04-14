<template>
  <div>

    <div class="head-nav">
      <Nav />
      <Head v-bind:config="{ title: title, name: name }" />
    </div>

    <Paragraph
      v-bind:text="about"
      v-bind:btnText="'Learn More'" />

    <Featured v-bind:projects="featured"/>
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import Featured from '~/components/Featured.vue'
import Paragraph from '~/components/Paragraph.vue'
import SiteData from '~/requests/content.js'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Head,
    Featured,
    Paragraph,
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
@import '../sass/vars';
  .head-nav {
    background: $head-bg; /* Old browsers */
    background: -moz-radial-gradient(50% 13%, ellipse cover, $head-bg 34%, darken($head-bg, 10%) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(50% 13%, ellipse cover, $head-bg 34%, darken($head-bg, 10%) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(circle at 50% 13%, $head-bg 34%, darken($head-bg, 10%) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }


</style>
