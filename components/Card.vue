<template>
  <div
    v-if="project"
    v-bind:class="{
      'left-card': num % 2 === 0,
      'right-card': num % 2 === 1
      }"
    class="card">

    <h2>{{ project.name }}</h2>

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
      return '@/static/images/viewtube1.png';
    },
    mouseover(event) {
      console.log('moused over', event);
      this.hover = !this.hover;
      console.log(this.hover);
    }
  },
  computed: {},
  beforeCreate() {
    this.getReadableDate = getReadableDate;
    this.hover = false;
  },
  afterCreate() {
    console.log('Thumbnail:::', this.project.images[0]);
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
    padding: 0 20px;

    @include transition(all 200ms ease-in);

    &:hover {
      background-color: rgba(255, 255, 255, 0.07);
    }

    display: flex;
    flex-direction: column;
  }

  %font {
    font-family: 'Helvetica', 'Verdana', sans-serif;
    font-weight: 300;
  }

  .left-card {
    border-left: 12px solid white;
    align-items: flex-start;
  }

  .right-card {
    border-right: 12px solid white;
    align-items: flex-end;
  }


</style>
