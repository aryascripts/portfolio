<template lang="html">
  <div class="background">
    <div class="container">
      <h1>About</h1>

        <div
            class="about-text"
            v-html="$md.render(about)">
        </div>

            <!-- {{ about }} -->

        <Primary class="learn-more"
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
  props: ['about']
}
</script>

<style scoped lang="scss">

@import './../sass/vars.scss';

.container {
  padding: 120px 0;
  text-align: center;

  .about-text {
    color: $green-light;
    text-align: left;
  }

  .about-text > p {
    margin-bottom: 10px;
  }
}

.background {
  background-color: $dots-border;
  @extend %left-down;
  padding: 0 20px;
}

.learn-more {
  margin: 20px auto;
}

</style>
