<template>
  <div class="work">
    <Card
      name="Some Project"
      description="This is a project about blah and blah blah that makes a lot of sense actually."
      date="March 1, 2018"/>
  </div>
</template>


<script>
import Card from './../components/Card.vue'

export default {
  components: {
    Card
  }
}

</script>


<style scoped lang="scss">
@import './../sass/vars.scss';

.work {
  min-height: 160vh;
  background-color: $pink;
  padding: 200px;
}

</style>
