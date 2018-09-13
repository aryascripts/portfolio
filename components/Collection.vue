<template>
  <div class="collection">
    <Card
      class="card"
      v-for="p in projects"
      v-bind:key="p.id"
      v-bind:name="p.name"
      v-bind:description="p.description"
      v-bind:date="p.date" />
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  props: ['projects'],
  mounted() {

  }
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
}

.card {
  margin: 10px;
}

</style>
