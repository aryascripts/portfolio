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
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: $dots-border;
  }
  $max-footer: 500px;

  .footer {
    width: 100%;
    background-color: $body-bg;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;

    -webkit-clip-path: polygon(0 0%, 100% 32px, 100% 100%, 0 100%);
    clip-path: polygon(0 0%, 100% 32px, 100% 100%, 0 100%);
    margin-top: -32px;
    padding: 60px 20px 30px 20px;
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
    font-size: 12pt;
    font-weight: 400;
    text-align: center;
    max-width: $max-footer;
    color: $dots-border;
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
