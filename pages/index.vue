<template>
  <div>
    <div class="head-nav">
      <Nav v-bind:resumeLink="resumeLink" />
      <Head v-bind:config="{ title: title, name: name }" />
    </div>


    <MediaList v-bind:items="media" />

    <Featured v-bind:title="'FEATURED WORK'" v-bind:projects="featured" />
  </div>
</template>

<script>
import Head from "~/components/ui/Head.vue";
import Featured from "~/components/Featured.vue";
import SiteData from "~/requests/content.js";
import Nav from "~/components/ui/Nav.vue";
import MediaList from '~/components/lists/MediaList.vue';

export default {
  components: {
    Head,
    Featured,
    Nav,
    MediaList
  },
  async asyncData() {
    return {
      title: SiteData.getTitle(),
      name: SiteData.getName(),
      featured: SiteData.getFeaturedProjects(),
      resumeLink: SiteData.getResumeLink(),
      media: SiteData.getMedia()
    };
  }
};
</script>

<style scoped lang="scss">
@import "~/sass/vars";
.head-nav {
  background: $head-bg; /* Old browsers */

  background: -moz-radial-gradient(
    50% 13%,
    ellipse cover,
    $head-bg 34%,
    darken($head-bg, 10%) 100%
  ); /* FF3.6-15 */

  background: -webkit-radial-gradient(
    50% 13%,
    ellipse cover,
    $head-bg 34%,
    darken($head-bg, 10%) 100%
  ); /* Chrome10-25,Safari5.1-6 */

  background: radial-gradient(
    circle at 50% 13%,
    $head-bg 34%,
    darken($head-bg, 10%) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
</style>
