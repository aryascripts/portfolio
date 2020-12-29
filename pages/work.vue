<template>
  <div>

    <div class="head-nav">
      <Nav
        v-bind:resumeLink="resumeLink"
        v-bind:bgColor="'#316097'"/>

      <Paragraph
        v-bind:title="'EXPERIENCE'"
        v-bind:noSlant="true"
        v-bind:text="workPara"/>

    </div>

		<Featured v-bind:title="'PROJECTS'" 
						  v-bind:projects="projects" 
							v-bind:showall="true" />

    </div>



  </div>
</template>

<script>
import SiteData from '~/requests/content.js'
import Nav from '~/components/ui/Nav.vue'
import Paragraph from '~/components/atoms/Paragraph.vue'
import Featured from '~/components/Featured.vue'

export default {
  components: { Nav, Paragraph, Featured },
  async asyncData() {
    return {
      projects: SiteData.getAllProjects(),
			workPara: SiteData.getWorkPagePara()
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

.book-lists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
