<template>
  <div class="background">

    <div class="container padding">
      <h1>FEATURED WORK</h1>
    </div>

    <Collection
      v-bind:projects="projects" />

  </div>
</template>

<script>
import Quotes from './Quotes.vue'
import Collection from './Collection.vue'
import SiteData from './../utils/content'

export default {
  components: {
    Quotes,
    Collection
  },
  data() {
    return {
      projects: SiteData.getFeaturedProjects()
    }
  }
}


</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.padding {
  padding-top: 32px;
}
.background {
  background-color: #386fad;
  margin-top: -5%;
  padding: 80px 0;
  -webkit-clip-path: polygon(0 0%, 100% 5%, 100% 100%, 0 100%);
  clip-path: polygon(0 0%, 100% 5%, 100% 100%, 0 100%);
}

</style>
