<template>
  <div class="collection">

    <h1>{{ name }}</h1>
    <Card
      class="card"
      v-for="p in projects"
      v-bind:key="p.id"
      v-bind:project="p"/>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  props: ['projects', 'name']
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: $card-overlap;

  width: 100%;

  .card:last-child {
    border-radius: $card-radius;
  }
}

h1 {
  margin-top: -28px;
  margin-bottom: 42px;
}

</style>
