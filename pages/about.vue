<template>
  <div>

    <div class="head-nav">
      <Nav
        v-bind:resumeLink="resumeLink"
        v-bind:bgColor="'#316097'"/>

      <Paragraph
        v-bind:title="'GETTING PERSONAL'"
        v-bind:noSlant="true"
        v-bind:text="about"/>

    </div>

    <div class="background slant">
      <h1>READING & LEARNING</h1>
      <div class="book-lists">
        <BookList
          v-bind:title="'Currently Reading'"
          v-bind:books="current" />

        <BookList
          v-bind:title="'Favorite Books'"
          v-bind:books="favs" />
      </div>

    </div>



  </div>
</template>

<script>
import SiteData from '~/requests/content.js'
import Nav from '~/components/Nav.vue'
import Paragraph from '~/components/Paragraph.vue'
import Featured from '~/components/Featured.vue'
import BookList from '~/components/BookList.vue'

export default {
  components: { Nav, Paragraph, Featured, BookList },
  async asyncData() {
    return {
      about: SiteData.getAboutPagePara(),
      current: SiteData.getCurrentlyReading(),
      favs: SiteData.getFavoriteBooks(),
      resumeLink: SiteData.getResumeLink()
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
