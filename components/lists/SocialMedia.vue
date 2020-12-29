<template>
  <SlantWrap>
    <MaxWidth>
      <Title v-bind:text="'Follow Me'" />
      <div class="col-a-c">
        <div class="row-a-c j-c wrap">
          <div
            class="social col-a-c j-c pointer"
            v-for="item in items"
            v-bind:key="item.name"
            v-on:click="open(item.link)"
          >
            <img :src="item.icon" :alt="`${item.name} Icon`" />
            <div class="title">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </MaxWidth>
  </SlantWrap>
</template>

<script>
import Github from "~/static/icons/github.svg";
import Medium from "~/static/icons/medium.svg";
import Linkedin from "~/static/icons/linkedin.svg";
import Twitter from "~/static/icons/twitter.svg";
import Youtube from "~/static/icons/youtube.svg";
import Title from "~/components/atoms/Title.vue";
import MaxWidth from "~/components/wraps/MaxWidth.vue";
import SlantWrap from "~/components/wraps/SlantWrap.vue";

export default {
  components: {
    MaxWidth,
    SlantWrap,
    Title,
  },
  methods: {
    open(link) {
      window.open(link, "_blank");
    },
  },
  data: () => {
    return {
      Github,
      Medium,
      Linkedin,
      Twitter,
      Youtube,
      items: [
        {
          name: "YouTube",
          link: "https://www.youtube.com/channel/UC1DIqOKaLSRAMngq9yoayzQ",
          icon: Youtube,
        },
        {
          name: "Medium",
          link: "https://amanscripts.medium.com/",
          icon: Medium,
        },
        {
          name: "LinkedIn",
          link: "https://linkedin.com/in/amanbhimani",
          icon: Linkedin,
        },
        {
          name: "GitHub",
          link: "https://github.com/amanb014",
          icon: Github,
        },
        {
          name: "Twitter",
          link: "https://twitter.com/amanwhoscripts/",
          icon: Twitter,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "~/sass/vars.scss";
.social {
  margin: 0 15px 15px 15px;
  .title {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.8rem;
  }
  img {
    width: 60px;
    height: 60px;
    color: rgba(0, 0, 0, 0.6);
    opacity: 0.5;

    @include transition(opacity 200ms ease-in-out);

    &:hover {
      opacity: 1;
    }
  }
}
</style>