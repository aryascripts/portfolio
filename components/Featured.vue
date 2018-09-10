<template>
  <div>
    <div class="quote-box">
      <div class="quote">
        “If a cluttered desk is a sign of a <span>cluttered mind</span>, of what, then, is an empty desk a sign?”
      </div>
    </div>

    <div class="cards-container">
      <div class="pointer arrow left"></div>

      <div class="card"></div>

      <div class="pointer arrow right"></div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
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

.cards-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
  background-color: #ff698e;
}
.card {
  width: 65%;
  max-width: 740px;
  height: 65vh;
  background-color: #f1ffe7;
  border-radius: 50px;
}

.arrow {
  border: solid #2e3532;
  opacity: 0.6;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 20px;
  transition: opacity 150ms;
}
.arrow:hover {
  opacity: 1;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

</style>
