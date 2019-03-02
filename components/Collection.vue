<template>
  <div class="collection">

    <h1>{{ name }}</h1>
    <div class="loop-cards">
      <!-- <Card
        class="card"
        v-for="p in projects"
        v-bind:key="p.id"
        v-bind:project="p"/> -->

        <div v-for="p in projects"
        v-bind:key="p.id"
        class="singe-card">

        </div>
    </div>

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

.loop-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.singe-card {
  width: 180px;
  height: 140px;
  background-color: #e6fdf2;
  border: 11px solid transparent;
  -webkit-box-sizing: unset;
  box-sizing: unset;
  background-clip: content-box;
  border-radius: 25px;
  /* border-left: 0px; */
}
</style>
