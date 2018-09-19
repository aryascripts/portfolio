<template>
  <div v-bind:style="{backgroundColor: cardColor}" ref="cardRef" class="card">

    <div class="content">
      <div class="name">
        {{ name }}
      </div>
      <div class="para description">
        {{ description }}
      </div>
      <div class="para date">
        {{ date }}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: [
    'name',
    'description',
    'date',
    'bgColor'
  ],
  methods: {
    getRandomColor() {
      const randomPastel = `hsl(${360 * Math.random()}, ${(25 + 70 * Math.random())}%, ${(85 + 10 * Math.random())}%)`
      return randomPastel;
    }
  },
  data() {
    const color = this.getRandomColor();
    return {
      cardColor: color
    }
  }
}

</script>

<style scoped lang="scss">
@import './../sass/vars.scss';
  .card {
    width: 100%;
    min-height: 100px;
    background-color: $green-light;
    border-radius: $card-radius;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    position: relative;
    margin-top: -45px;

    @include boxShadow(0px 0px 9px 0px rgba(0,0,0,0.10));
    transition: 300ms box-shadow ease, 3s background-color ease;

    &:hover {
      @include boxShadow(0px 3px 15px 0px rgba(0,0,0,0.55));
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 15px 15px #{$card-overlap+5} 15px;
    height: 100%;
  }

  .name {
    text-align: center;
    font-family: 'Helvetica', 'Verdana', sans-serif;
    font-weight: 500;
    letter-spacing: 0px;
    text-transform: uppercase;
  }

  .description {
    font-family: 'Helvetica', 'Verdana', sans-serif;
    font-weight: 300;
    letter-spacing: 0px;
    flex-grow: 1;
    overflow: hidden;
  }

  .date {
    text-align: right;
    font-family: 'Helvetica', 'Verdana', sans-serif;
    font-weight: 300;
    letter-spacing: 0px;
    align-self: flex-end;
  }
</style>
