<template>
  <div>
    <div class="nav">
      <div class="section nav-items">
        <div class="pointer item">home</div>
        <div class="pointer item">work</div>
        <div class="pointer item">about</div>
        <div class="pointer item">connect</div>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


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
