<template lang="html">
  <div
    v-bind:class="{slant: !noSlant }"
    class="background">
    <div class="container">
      <h1>{{ title || 'ABOUT' }}</h1>

        <div
            class="about-text"
            v-html="$md.render(text)">
        </div>

        <Primary v-if="btnText"
          class="learn-more"
          v-bind:type="'primary'"
          v-bind:text="'Learn More'" />
    </div>
  </div>

</template>

<script>
import SiteData from './../utils/content.js'
import Primary from './Primary.vue'

export default {
  components: { Primary },
  props: [ 'text', 'btnText', 'btnLink', 'noSlant', 'title' ]
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
  background-color: darken($head-bg, 15%);
  padding: 0 20px;
  margin: -35px 0 0 0;
}

.slant {
  @extend %right-down;
}

h1 {
  color: $dots-border;
}

.learn-more {
  margin: 20px auto;
}

</style>
