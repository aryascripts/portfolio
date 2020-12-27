<template>
  <div class="background">

    <div class="container padding">
      <h1>{{ title }}</h1>
    </div>

    <Collection
      class="max-width"
      v-bind:projects="projects" />


      <Primary
        v-if="!showall"
        class="resume-button"
        v-bind:type="'secondary'"
        v-bind:link="'work'"
        v-bind:text="'View All Projects'" />
  </div>
</template>

<script>
import Quotes from '~/components/ui/Quotes.vue'
import Collection from '~/components/lists/Collection.vue'
import Primary from '~/components/atoms/Primary.vue'

export default {
  components: { Quotes, Primary, Collection },
  props: ['projects', 'title', 'showall']
}


</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.background {
  background-color: $white-text;
  margin-top: -40px;
  padding: 80px 0;
  text-align: center;

  @extend %right-down;
}
.resume-button {
  margin-top: 30px;
}

</style>
