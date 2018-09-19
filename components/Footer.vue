<template>
  <div class="footer">
    <div class="name">
      aman bhimani
    </div>
    <div class="code">
      <div class="const">
        const love =
      </div>
      <div class="arr">
        ['technology', 'web development', 'design', 'animals', 'video-games', 'reading', 'science', 'driving', 'music', 'driving with music'];
      </div>
    </div>

  </div>
</template>



<script>

</script>


<style scoped lang="scss">
  @import './../sass/vars.scss';

  %light-font {
    font-family: 'Verdana', sans-serif;
    font-weight: 200;
    color: $white-text;
  }
  $max-footer: 500px;

  .footer {
    width: 100%;
    background-color: $pink;
    z-index: 10;
    padding: 20px 20px 30px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    @extend %light-font;
    font-size: 3vmax;
  }

  .description {
    @extend %light-font;
    font-size: 1.8vmax;
    max-width: $max-footer;
    text-align: center;
  }

  .code {
    font-family: 'Courier New', monospace;
    font-size: 1.8vmax;
    font-weight: 600;
    text-align: center;
    max-width: $max-footer;
    color: $white-text;
    margin-top: 10px;

    display: flex;
    flex-direction: row;

    div {
      &:nth-child(1) {
        flex-shrink: 0;
      }

      &:nth-child(2) {
        text-align: left;
        padding-left: 5px;
      }
    }
  }

</style>
