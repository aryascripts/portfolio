<template lang="html">
  <div
    v-bind:class="{btnprimary: type === 'primary' }"
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 47px;
}

.btnprimary {
  background-color: $body-bg;
  color: $dots-border;
  border: 2px solid $dots-border;

  @include transition(all 300ms ease-in-out);

  &:hover {
    background-color: #98b7de;
    color: $body-bg;
    border: 2px solid #98b7de;
  }
}

</style>
