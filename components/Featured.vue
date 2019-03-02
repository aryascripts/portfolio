<template>
  <div class="background">

    <div class="container padding">
      <h1><span>f</span>eatured <span>w</span>ork</h1>
      <Collection
        v-bind:projects="projects" />
    </div>

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
  padding: 15px;
}
.background {
  background-color: $dots-border;
}

</style>
