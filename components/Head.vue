<template>

  <div class="head-section">
    <div class="pic-info">
      <svg class="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle id="Oval" cx="512" cy="512" r="512"></circle>
        <circle id="Oval" cx="512" cy="512" r="512"></circle>
      </svg>
        <div class="circle-border">
          <div class="circle-background"></div>
        </div>

        <div class="name">{{ config.name }}</div>
        <div class="title">{{ config.title }}</div>
    </div>

    <Quotes class="quotes" />
  </div>
</template>

<script>
  import Quotes from './Quotes.vue'

  export default {
    components: {
      Quotes
    },
    props: [ 'config' ]
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
  text-transform: lowercase;
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
  padding-top: 8vh;
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

.pulse {
	position: absolute;
  left: 50%;
	transform: translate(-50%, -50%);
  margin-top: 50px;
	max-width: 30rem;
  fill: $dots-border;
  animation-iteration-count: infinite;

	circle {
		transform: scale(0);
		opacity: 0;
		transform-origin: 50% 50%;
		animation: pulse 3s 1s cubic-bezier(.5,.5,0,1);
    animation-iteration-count: infinite;

		&:nth-child(2) {
			animation: pulse 3s 1.5s cubic-bezier(.5,.5,0,0.6);
      animation-iteration-count: infinite;
		}
	}

}

@keyframes pulse {
	25% { opacity: 0.2; }
	100% { transform: scale(1); }
}

</style>
