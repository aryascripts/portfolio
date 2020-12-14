<template>
  <div
    v-if="project"
    class="card">

    <h2>{{ project.title }}</h2>
    <div class="description"
        v-html="$md.render(this.project.description)"></div>

    <div v-bind:style="{
      backgroundImage: 'url(' + project.thumbnail + ')',
      }"
    class="background">

    </div>


  </div>

</template>

<script>

export default {
  props: [
    'project',
    'text',
    'num'
  ]
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
    background-color: lighten($blue-bg, 30%);
    color: $blue-bg;
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
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 20px 0 20px;
    max-height: 500px;
    background-position: 50% 0;
  }

  @keyframes bgpan {
    0% { background-position-y: 0%; }
    50% { background-position-y: 100%; }
    100% { background-position-y: 0%; }
  }


</style>
