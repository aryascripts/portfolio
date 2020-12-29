<template>
    <SlantWrap>
      <MaxWidth>

        <Title v-bind:text="'Published Media'" />

        <div class="col-a-c">

          <div class="row-a-c j-c wrap">
            <MediaItem 
              v-for="item in items"
              v-bind:key="item.title"
              v-bind:title="item.title" 
              v-bind:date="item.date"
              v-bind:type="item.type"
              v-bind:link="item.link"
              v-bind:img="item.img" />
          </div>

        </div>

      </MaxWidth>
    </SlantWrap>
</template>

<script>
import Title from '~/components/atoms/Title.vue';
import SlantWrap from '~/components/wraps/SlantWrap.vue';
import MediaItem from '~/components/lists/MediaItem.vue';
import MaxWidth from '~/components/wraps/MaxWidth.vue';
import SiteData from '~/requests/content.js'

export default {
  props: ['items'],
  components: { Title, SlantWrap, MediaItem, MaxWidth },
}
</script>


<style lang="sass" scoped>



</style>