<template>
  <div class="background">
    <Quotes />

    <div class="container">
      <h1><span>f</span>eatured <span>w</span>ork</h1>
      <Collection
        v-bind:projects="projects" />
    </div>

  </div>
</template>

<script>
import Quotes from './Quotes.vue'
import Collection from './Collection.vue'
import SiteData from './../content'

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
  padding: 0px 15px 0 15px;
}
.background {
  background-color: $pink;
}

</style>
