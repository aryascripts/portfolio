<template>
  <div class="head-section">

    <div class="quotes-wrap">
      <div class="quotes-box">

        <div class="circle-border">
          <div class="circle-background"></div>
        </div>

      </div>

      <div class="basic-info">
        <div class="line"></div>
        <div class="name">aman bhimani.</div>
        <div class="title">software developer.</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default { }
</script>


<style scoped lang="scss">
  @import './../sass/vars.scss';

  .line {
    width: 100%;
    height: 1vh;
    background-color: #FDB798;
    mix-blend-mode: color-dodge;
  }

  .circle-border {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    border: 4px dotted $green-light;
    position: relative;
    margin: 0 auto;

    animation: 1s ease-in-out 1300ms 1 normal both running appear;

    .circle-background {
      width: 180px;
      height: 180px;
      border-radius: 180px;
      background: url('./../static/aman.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
      margin: 0 auto;
      top: 6px;
    }
  }

  .head-section {
    width: 100%;
    height: 90vh;
    background: url('./../static/fuzzy.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;

  }

  .name, .title {
    font-family: 'Arial Black', sans-serif;
    color: #FDB798;
    mix-blend-mode: color-dodge;
    width: auto;
    text-align: left;
    animation: 1s ease-in-out 300ms 1 normal both running appear;

    justify-self: flex-end;
  }
  .name {
    font-size: 5vmax;
    line-height: 5vmax;
  }
  .title { font-size: 3vmax; }

  .quotes-wrap {
    margin-top: 5vh;
    align-self: center;
  }
  .quotes-box {
    height: 50vh;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content:space-around;

    animation: 1s ease 500ms 1 normal both running quotes-appear;
  }

  @keyframes quotes-appear {
    from { height: 1vh; }
    to   { height: 65vh; }
  }

  @keyframes appear {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
</style>
