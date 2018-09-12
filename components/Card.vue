<template>
  <div class="card pointer">
    <div class="pic">

    </div>

    <div class="content">
      <div class="name">
        {{ name }}
      </div>
      <div class="description">
        {{ description }}
      </div>
      <div class="date">
        {{ date }}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: ['name', 'description', 'date']
}

</script>

<style scoped lang="scss">
@import './../sass/vars.scss';
  .card {
    width: 220px;
    height: 330px;
    background-color: $green-light;
    border-radius: 25px;
    position: relative;
    margin-top: 40px;

    @include boxShadow(0px 0px 9px 0px rgba(0,0,0,0.10));
    transition: 300ms box-shadow ease;

    &:hover {
      @include boxShadow(0px 3px 11px 0px rgba(0,0,0,0.35));
    }

    .pic {
      width: 80%;
      height: 55%;
      background-color: white;
      border-radius: 20px;
      position: absolute;
      margin-top: -40px;
      left: 50%;
      transform: translateX(-50%);

      @include boxShadow(0px 3px 9px 0px rgba(0,0,0,0.20));
      transition: 300ms box-shadow ease;

      &:hover {
        @include boxShadow(0px 3px 9px 0px rgba(0,0,0,0.35));
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 70% 15px 15px 15px;
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
    text-align: center;
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
