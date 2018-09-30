<template>
  <div
    v-bind:style="{backgroundColor: cardColor}"
    class="card">

    <div class="content">
      <div class="name">
        {{ project.name }}
      </div>

      <div v-html="post" class="para post"></div>

      <div class="para date">
        {{ getReadableDate(project.date.start) }}
        --
        {{ project.date.end ? getReadableDate(project.date.end) : 'current' }}
      </div>
    </div>

  </div>

</template>

<script>
import SiteData from './../utils/content'
import { getReadableDate } from './../utils/functions'

export default {
  props: [
    'project'
  ],
  methods: {
    getRandomColor() {
      const randomPastel = `hsl(${360 * Math.random()}, ${(25 + 70 * Math.random())}%, ${(85 + 10 * Math.random())}%)`
      return randomPastel;
    }
  },
  data() {
    const color = this.getRandomColor();
    return {
      cardColor: color
    }
  },
  computed: {
    post() {
      return SiteData.getPost(this.project.md_file)
    }
  },
  beforeCreate() {
    this.getReadableDate = getReadableDate;
  }
}

</script>

<style scoped lang="scss">
@import './../sass/vars.scss';
  .card {
    width: 100%;
    min-height: 100px;
    background-color: $green-light;
    border-radius: $card-radius;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    position: relative;
    margin-top: -45px;

    @include boxShadow(0px 0px 9px 0px rgba(0,0,0,0.10));
    transition: 300ms box-shadow ease, 3s background-color ease;

    &:hover {
      @include boxShadow(0px 3px 15px 0px rgba(0,0,0,0.55));
    }
  }

  %font {
    font-family: 'Helvetica', 'Verdana', sans-serif;
    font-weight: 300;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 15px 15px #{$card-overlap+25} 15px;
    height: 100%;
  }

  .name {
    @extend %font;
    text-align: center;
    font-weight: 100;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .description {
    @extend %font;

    letter-spacing: 0px;
    flex-grow: 1;
    overflow: hidden;
  }

  .post {
    @extend .description;
  }

  .date {
    @extend %font;

    text-align: right;
    letter-spacing: 0px;
    align-self: flex-end;
    margin: 15px 0;
  }
</style>
