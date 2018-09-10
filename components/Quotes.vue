<template>
  <div class="quote-box">
    <div class="quote">
      “If a cluttered desk is a sign of a <span>cluttered mind</span>, of what, then, is an empty desk a sign?”
    </div>
  </div>
</template>


<script>

</script>


<style scoped lang="scss">
@import './../sass/vars.scss';

.quote-box {
  height: 10vh;
  width: 100%;
  background-color: #ff698e;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: $green-light;

  .quote {
    width: 90%;
    max-width: $nav-max-width;
    margin: 0 auto;
    font-family: 'Trochut', cursive;
    font-size: 1.9vmax;
    text-align: center;
    letter-spacing: 1px;

    animation: 1s ease-in-out 1100ms 1 normal both running appear;

    span {
      font-weight: bold;
    }
  }
}
</style>
