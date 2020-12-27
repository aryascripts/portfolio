<template lang="html">
  <div
    v-bind:class="{slant: !noSlant }"
    class="background-para">
    <div class="container">
      <h1>{{ title || 'ABOUT' }}</h1>

        <div
            class="about-text"
            v-html="$md.render(text)">
        </div>

        <Primary v-if="btnText"
          v-bind:link="btnLink"
          class="learn-more"
          v-bind:type="'primary'"
          v-bind:text="'Learn More'" />
    </div>
  </div>

</template>

<script>
import SiteData from '~/requests/content.js'
import Primary from './Primary.vue'

export default {
  components: { Primary },
  props: [ 'text', 'btnText', 'btnLink', 'noSlant', 'title', 'btnLink' ]
}
</script>

<style scoped lang="scss">

@import '~/sass/vars.scss';

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

.background-para {
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
