<template>
  <SlantWrap>

    <Title v-bind:text="title" />

    <MaxWidth>
      <Collection
        v-bind:projects="projects" />


        <Primary
          v-if="!showall"
          class="resume-button"
          v-bind:type="'secondary'"
          v-bind:link="'work'"
          v-bind:text="'View All Projects'" />
    </MaxWidth>
  </SlantWrap>
</template>

<script>
import Quotes from '~/components/ui/Quotes.vue'
import Collection from '~/components/lists/Collection.vue'
import Primary from '~/components/atoms/Primary.vue'
import Title from '~/components/atoms/Title.vue'
import SlantWrap from '~/components/wraps/SlantWrap.vue'
import MaxWidth from '~/components/wraps/MaxWidth.vue';

export default {
  components: { Quotes, Primary, Collection, Title, SlantWrap, MaxWidth },
  props: ['projects', 'title', 'showall']
}

</script>

<style scoped lang="scss">
@import '~/sass/vars.scss';

.resume-button {
  margin-top: 30px;
}
</style>
