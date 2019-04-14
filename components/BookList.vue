<template lang="html">
  <div class="book-list">
    <div class="title">{{ title }}</div>


  </div>


</template>

<script>

export default {
  props: [ 'books', 'title' ]
}

</script>

<style scoped lang="scss">
@import '~/sass/vars.scss';
@import '~/sass/global.scss';

.book-list {
  max-width: 400px;
  min-width: 250px;
}

.title {
  display: inline-block;
  width: 100%;
  @extend %header-font;
  font-size: 20px;
  text-transform: uppercase;
}
</style>
