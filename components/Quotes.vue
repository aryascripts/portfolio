<template>
  <div class="quote-container">
    <span class="quote-title">Quote of the day</span>
    <div class="quote-box">
      <div class="quote">
        “If a cluttered desk is a sign of a <span>cluttered mind</span>, of what, then, is an empty desk a sign?”
      </div>
    </div>
  </div>

</template>


<script>

</script>


<style scoped lang="scss">
@import './../sass/vars.scss';

.quote-container {
  width: 90vw;
  margin: 0 auto;
  margin-top: 50px;

  .quote-title {
    margin: -33px 0 0px 27px;
    font-family: 'Bilbo Swash Caps', cursive;
    font-size: 36px;
    position: absolute;
    color: $dots-border;
  }
}

.quote-box {
  min-height: 10vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: $dots-border;

  border: 2px solid $dots-border;
  border-radius: 30px;

  .quote {
    width: 90%;
    max-width: $nav-max-width;
    margin: 10px auto;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 1px;

    animation: 1s ease-in-out 1100ms 1 normal both running appear;

    span {
      font-weight: bold;
    }
  }
}
</style>
