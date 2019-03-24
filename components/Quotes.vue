<template>
  <div class="quote-container">

    <div class="line top">
      <div class="circle">
        <img :src="Quote" />
      </div>
    </div>

    <div class="quote-box">
      <div class="quote">
        “If a cluttered desk is a sign of a <span>cluttered mind</span>, of what, then, is an empty desk a sign?”
      </div>
    </div>

    <div class="line bottom">
      <div class="circle"><img :src="Quote" /></div>
    </div>
  </div>

</template>


<script>
import Quote from '~/static/images/quote.svg'

export default {
  data: () => ({
    Quote
  })
}
</script>


<style scoped lang="scss">
@import './../sass/vars.scss';

.quote-container {
  width: 90vw;
  margin: 0 auto;
  margin-top: 50px;
}

.quote-box {
  min-height: 10vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: $dots-border;


  .quote {
    width: 85%;
    max-width: $nav-max-width;
    margin: 30px auto;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 1px;

    animation: 1s ease-in-out 1100ms 1 normal both running appear;

    span {
      font-weight: bold;
    }
  }
}

$circle-size: 50px;
.line {
  width: 100%;
  height: 3px;
  background-color: $dots-border;

  .circle {
    transform: translateY(-50%);

    display: flex;
    flex-direction: row;
    justify-content: center;
    line-height: $circle-size;
  }
}


.top {
  .circle {
    img {
      transform: rotate(180deg);
    }
  }
}
.bottom {
  .circle {
    float: right;
  }
}
.circle {
  width: $circle-size;
  height: $circle-size;
  border-radius: $circle-size;
  background-color: $dots-border;
}

img {
  width: 60%;
}
</style>
