<template>
  <div class="background">

    <div class="container padding">
      <h1>FEATURED WORK</h1>
    </div>

    <Collection
      v-bind:projects="projects" />


      <Primary
        class="resume-button"
        v-bind:type="'primary'"
        v-bind:text="'View All Projects'" />
  </div>
</template>

<script>
import Quotes from './Quotes.vue'
import Collection from './Collection.vue'
import SiteData from './../requests/content.js'
import Primary from './Primary.vue'

export default {
  components: {
    Quotes,
    Primary,
    Collection
  },
  props: ['projects']
}


</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.padding {
  padding-top: 32px;
}
.background {
  background-color: $second-slider;
  margin-top: -40px;
  padding: 80px 0;
  text-align: center;

  @extend %right-down;
}
.resume-button {
  margin-top: 30px;
}

</style>
