<template>
  <div
    v-if="project"
    class="card">

    <h2>{{ project.title }}</h2>
    <div class="description">
      {{ getShortDescription() }}
    </div>

    <div v-bind:style="{
      backgroundImage: 'url(' + project.thumbnail + ')',
      }"
    class="background">

    </div>


  </div>

  <!-- <div
    v-else-if="text"
    class="card rounded">

    <div
      v-html="text"
      class="content textonly">
    </div>
  </div> -->

</template>

<!-- v-bind:style="{
  'backgroundImage': `url(${require('@/static/images/'+ project.images[0] ) })`
  }" -->

<script>
import SiteData from './../utils/content'
import { getReadableDate } from './../utils/functions'

export default {
  props: [
    'project',
    'text',
    'num'
  ],
  methods: {
    getThumbnail() {
      return '@/static/images/viewtube1.png'
    },
    getShortDescription() {
      return this.project.description.split('\n')[0]
    }
  },
  computed: {},
  beforeCreate() {
    this.getReadableDate = getReadableDate;
  }
}

</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

  .card {
    min-height: 200px;
    box-sizing: unset;
    overflow: hidden;
    background-position: top center;
    -webkit-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
    padding: 20px;

    @include transition(all 200ms ease-in);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  %font {
    font-family: 'Helvetica', 'Verdana', sans-serif;
    font-weight: 300;
  }

  h2 {
    background-color: rgba(0,0,0, 0.25);
    padding: 3px 5px;
  }

  .description {
    width: 100%;
    padding: 10px 0;
    text-align: left;

    @extend %font;
  }

  .background {
    width: 100%;
    min-width: 200px;
    height: 400px;
    background-size: cover;
    border-radius: 0 20px 20px 20px;
    max-height: 500px;

    // animation: bgpan 60s linear;
    // animation-iteration-count: infinite;

  }

  @keyframes bgpan {
    0% { background-position-y: 0%; }
    50% { background-position-y: 100%; }
    100% { background-position-y: 0%; }
  }


</style>
