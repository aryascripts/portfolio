<template>
  <div v-smooth-load="'./../static/fuzzy.jpg'" ref="headSection" class="head-section">

    <div class="pic-info">
        <div class="circle-border">
          <div class="circle-background"></div>
        </div>

        <div class="name">aman bhimani</div>
        <div class="title">software developer</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      loadImage: (headSection) => {
        // console.log(headSection);
        // const src = headSection.style.background;
        // console.log(src);
        // const url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
        // const img = new Image();
        //
        // img.onload = () => {
        //   alert('image loaded');
        // }
        //
        // img.src = url;
      }
    },
    data() {
      return {
        loaded: false
      }
    },
    mounted() {
      this.loadImage(this.$refs.headSection);
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
  color: $green-light;
  width: auto;
  text-align: left;
  animation: 1s ease-in-out 700ms 1 normal both running appear;

  justify-self: flex-end;
}
.name {
  font-size: 2.8vmax;
  line-height: 2.8vmax;
}
.title { font-size: 1.8vmax; }

.circle-border {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  border: 4px dotted $green-light;
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
  background: url('./../static/fuzzy.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.pic-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
