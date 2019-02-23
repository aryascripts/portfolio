<template lang="html">
  <div class="btn">
    {{ text }}
  </div>

</template>

<script>
export default {
  props: [
    'text'
  ]
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.btn {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  background-color: $body-bg;
  min-width: 150px;
  padding: 0 20px;
  color: $dots-border;
  height: 39px;
  text-align: center;
  display: flex;
  border: 2px solid $dots-border;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 47px;
}

</style>
