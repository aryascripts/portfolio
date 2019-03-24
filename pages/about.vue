<template>

<div class="about">
  <div class="content">
    <Card v-bind:text="about_me" />
  </div>


</div>



</template>

<script>
import SiteData from './../utils/content.js'
import Card from './../components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      about_me: ''
    }
  },
  created() {
    this.about_me = SiteData.getAboutMessage();
    this.favorites = SiteData.getBooks('favorites');
  }

}
</script>

<style lang="scss">
@import './../sass/vars.scss';

.about  {
  min-height: 160vh;
  padding: calc(#{$nav-height} + 60px) 15px 0 15px;;
}

</style>
