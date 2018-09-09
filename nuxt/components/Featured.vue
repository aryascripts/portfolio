<template>
  <div class="cards-container">

    <div class="pointer arrow left"></div>
    <div class="card">
    </div>
    <div class="pointer arrow right"></div>

  </div>
</template>


<script>

</script>



<style lang="scss">
@import './../sass/vars.scss';

.cards-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  background-color: $green;
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
