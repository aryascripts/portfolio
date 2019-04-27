<template lang="html">
  <div class="book">
    <div class="title">
      {{ book.title }}
    </div>
    <div v-if="!open" class="description">
      {{ parseHtml(book.description, true) }}
      <br />
      <a class="right" v-on:click="openDesc()">Read More.</a>
    </div>
    <div v-if="open" class="description">
      {{ parseHtml(book.description) }}
    </div>
  </div>
</template>

<script>
import unescape from 'lodash.unescape'

export default {
  props: ['book'],
  data: function() {
    return {
      open: false
    }
  },
  methods: {
    parseHtml: (text, slice) => {
      if (!text) return ''
      return slice ? `${unescape(text).replace(/<[^>]*>/g, '').slice(0,100)}...`
                   : `${unescape(text).replace(/<[^>]*>/g, '')}`
    },
    openDesc() {
      this.open = true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/sass/vars.scss';
@import '~/sass/global.scss';

.book {
  width: 100%;
  border-left: 2px solid $blue-bg;
  margin: 8px 0;
  text-align: left;
}

.title {
  padding: 5px 0;
  white-space: normal;
  word-wrap: normal;
  @extend %font;
  @extend %header-font;
  font-size: 18px;
}
.right {
  float: right;
}
</style>
