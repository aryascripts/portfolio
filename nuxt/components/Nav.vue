<template>
  <div class="nav">
    <div class="section nav-items">
      <div class="pointer item">home</div>
      <div class="pointer item">work</div>
      <div class="pointer item">about</div>
      <div class="pointer item">connect</div>
    </div>
  </div>
</template>


<script>


</script>


<style scoped lang="scss">
@import './../sass/vars.scss';

.nav {
  width: 100%;
  height: 6vh;
  position: fixed;
  top: 0;
  z-index: $nav-z;

  .nav-items {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 6vh;
    max-width: $nav-max-width;
    margin: 0 auto;
  }
}

.item {
  font-size: 2.5vmax;
  font-family: 'Arial Black', sans-serif;
  color: $green-light;
  height: 6vh;
  line-height: 6vh;
  padding: 0 15px;
  position: relative;

  transition: color 150ms ease-in-out;

  &:hover {
    color: $green-light;
  }
}
</style>
