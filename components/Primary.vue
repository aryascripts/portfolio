<template lang="html">
  <div
    v-bind:class="{
      'secondary-btn': type === 'secondary',
      'primary-btn': type === 'primary'
      }"
    class="btn pointer">
    {{ text }}
  </div>

</template>

<script>
export default {
  props: [ 'text', 'type' ]
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.btn {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  min-width: 150px;
  padding: 0 20px;
  height: 39px;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 47px;

  @include transition(all 300ms ease-in-out);
}

.secondary-btn {
  background-color: darken($head-bg, 15%);
  color: $dots-border;

  &:hover {
    background-color: $head-bg;
    color: $dots-border;
  }
}

.primary-btn {
  background-color: $primary-bg;
  color: #5086c6;

  &:hover {
    background-color: lighten($primary-bg, 10%);
    color: #5086c6;
  }
}

</style>
