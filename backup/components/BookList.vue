<template lang="html">
  <div class="book-list">
    <div class="title">{{ title }}</div>
    <BookListItem
      class="list-item"
      v-for="book in books"
      v-bind:key="book.id"
      v-bind:book="book.book"/>

  </div>


</template>

<script>
import BookListItem from './BookListItem.vue'

export default {
  props: [ 'books', 'title' ],
  components: { BookListItem }
}

</script>

<style scoped lang="scss">
@import '~/sass/vars.scss';
@import '~/sass/global.scss';

.book-list {
  width: 40%;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  margin: 0 0 25px 0;
}

.title {
  display: inline-block;
  width: 100%;
  @extend %header-font;
  font-size: 20px;
  text-transform: uppercase;
}

.list-item {
  padding: 0 5px;
}
</style>
