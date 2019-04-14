<template>
  <div>

    <div class="head-nav">
      <Nav v-bind:bgColor="'#316097'"/>

      <Paragraph
        v-bind:title="'GETTING PERSONAL'"
        v-bind:noSlant="true"
        v-bind:text="about"/>

    </div>

    <div class="background slant">
      <div class="container">
        <h1>READING & LEARNING</h1>
      </div>

    </div>



  </div>
</template>

<script>
import SiteData from '~/requests/content.js'
import Nav from '~/components/Nav.vue'
import Paragraph from '~/components/Paragraph.vue'
import Featured from '~/components/Featured.vue'


export default {
  components: { Nav, Paragraph, Featured },
  async asyncData() {
    return {
      about: SiteData.getAboutPagePara()
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/sass/vars.scss';


.background {
  background-color: $white-text;
  margin-top: -40px;
  padding: 80px 0;
  text-align: center;
}

.slant {
  @extend %right-down;
}

</style>
