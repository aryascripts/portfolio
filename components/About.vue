<template lang="html">
  <div class="background">
    <div class="container">
      <h1>About</h1>

        <div
            class="about-text"
            v-html="about_me"></div>

            <Primary
              v-bind:type="'secondary'"
              v-bind:text="'Learn More'" />
    </div>
  </div>

</template>

<script>
import SiteData from './../utils/content.js'
import Primary from './Primary.vue'

export default {
  components: {
    Primary
  },
  data() {
    return {
      about_me: ''
    }
  },
  created() {
    this.about_me = SiteData.getAboutMessage()
    this.favorites = SiteData.getBooks('favorites')
  }
}
</script>

<style scoped lang="scss">

@import './../sass/vars.scss';

.container {
  padding: 120px 0;

  .about-text {
    color: $green-light;
  }
}

.background {
  background-color: $dots-border;
  -webkit-clip-path: polygon(0 30px, 100% 0, 100% 88%, 0 100%);
  clip-path: polygon(0 30px, 100% 0, 100% 100%, 0 100%);
}

</style>
