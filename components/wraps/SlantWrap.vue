<template>
  <div class="background">
    <slot></slot>
  </div>
</template>


<style scoped lang="scss">
@import "~/sass/vars.scss";

.background {
  background-color: $white-text;
  margin-top: -40px;
  padding: 50px 0;

  @extend %right-down;
}
.resume-button {
  margin-top: 30px;
}
</style>