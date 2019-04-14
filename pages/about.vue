<template>
  <div>

    <div class="head-nav">
      <Nav v-bind:bgColor="'#316097'"/>

      <Paragraph class="paragraph"
        v-bind:title="'GETTING PERSONAL'"
        v-bind:noSlant="true"
        v-bind:text="'Some text here and no buttons.'"/>

    </div>






  </div>
</template>

<script>
import SiteData from '~/requests/content.js'
import Nav from '~/components/Nav.vue'
import Paragraph from '~/components/Paragraph.vue'

export default {
  components: { Nav, Paragraph },
  async asyncData() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

.paragraph {
  margin-top: -20px;
}

</style>
