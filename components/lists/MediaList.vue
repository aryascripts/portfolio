<template>
    <SlantWrap>
      <MaxWidth>

        <Title v-bind:text="'Published Media'" />

        <MediaItem 
          title="Brew.sh on Apple Silicon M1 (Developer's Guide)" 
          description="Hi All, in this video we will learn how to install brew.sh, a popular package manager, on Apple's M1 chip! Brew is not yet ready for installing on ARM based processors, but Apple has introduced Rosetta 2 as an emulation layer."
          date="December 20, 2020" 
          link="https://www.youtube.com/watch?v=ownqV5sNLAw"
          img="https://i.ytimg.com/vi/ownqV5sNLAw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCsQgrB2kswU0Y4yuxiu4NtZpqkQA.png" />

        <MediaItem 
          title="Brew.sh on Apple Silicon M1 (Developer's Guide)" 
          description="Hi All, in this video we will learn how to install brew.sh, a popular package manager, on Apple's M1 chip! Brew is not yet ready for installing on ARM based processors, but Apple has introduced Rosetta 2 as an emulation layer."
          date="December 20, 2020" 
          link="" />


      </MaxWidth>
    </SlantWrap>
</template>

<script>
import Title from '~/components/atoms/Title.vue';
import SlantWrap from '~/components/wraps/SlantWrap.vue';
import MediaItem from '~/components/lists/MediaItem.vue';
import MaxWidth from '~/components/wraps/MaxWidth.vue';


export default {
  components: { Title, SlantWrap, MediaItem, MaxWidth },
}
</script>


<style lang="sass" scoped>



</style>