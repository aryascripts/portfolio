<template>

  <div class="head-section">
    <div class="pic-info">
        <div class="circle-border">
          <div class="circle-background"></div>
        </div>

        <div class="name">aman bhimani</div>
        <div class="title">software developer</div>
    </div>

    <Quotes class="quotes" />
  </div>
</template>

<script>
  import Quotes from './Quotes.vue'

  export default {
    components: {
      Quotes
    }
  }
</script>


<style scoped lang="scss">
@import './../sass/vars.scss';

.line {
  width: 100%;
  height: 1vh;
  background-color: #FDB798;
  mix-blend-mode: color-dodge;
}

.name, .title {
  font-family: 'verdana', sans-serif;
  color: $dots-border;
  width: auto;
  text-align: left;
  animation: 1s ease-in-out 700ms 1 normal both running appear;

  justify-self: flex-end;
}
.name {
  font-size: 2.2rem;
  line-height: 2.2rem;
  margin-top: 10px;
}
.title { font-size: 1rem; }

.circle-border {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  border: 4px dotted $dots-border;
  position: relative;
  margin: -50px auto 0 auto;

  animation: 1s ease-in-out 100ms 1 normal both running appear;

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

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20vh;
}

.pic-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.head-section[lazy=loading] {
  opacity: 0;
}
.head-section[lazy=error] {

}
.head-section[lazy=loaded] {
  opacity: 1;
}

</style>
