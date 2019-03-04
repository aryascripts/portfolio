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
  props: [
    'text',
    'type'
  ]
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
  background-color: $body-bg;
  color: $dots-border;
  border: 2px solid $dots-border;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: $body-bg;
  }
}

.primary-btn {
  background-color: $body-bg;
  color: $dots-border;
  border: 2px solid $dots-border;

  &:hover {
    background-color: $dots-border;
    color: $body-bg;
  }
}

</style>
