<template>
  <div class="background">
    <Quotes />

    <div class="container">
      <h1><span>f</span>eatured <span>w</span>ork</h1>
      <Collection
        v-bind:projects="projects" />
    </div>

  </div>
</template>

<script>
import Quotes from './Quotes.vue'
import Collection from './Collection.vue'

export default {
  components: {
    Quotes,
    Collection
  },
  data() {
    return {
      projects: [{
          id: '1',
          name: 'ViewTube',
          date: '2018-04-01',
          md_file: 'viewtube'
        }, {
          id: '2',
          name: 'Project Two',
          description: 'Maecenas nec sapien at ligula bibendum mattis ut eu mauris. Nullam eleifend ex non nisl suscipit dignissim. Sed iaculis et enim eu volutpat. Sed at laoreet lacus. In rhoncus, erat semper condimentum tempor, magna leo molestie metus, ac ornare lacus augue ut purus. Curabitur id libero eget risus porttitor interdum. Sed aliquet elementum vestibulum. Fusce ac nulla nec erat pretium cursus imperdiet sed urna. Pellentesque convallis, odio eget imperdiet venenatis, libero orci facilisis erat, in mattis felis justo id ex. Nullam facilisis, ante eget posuere bibendum, turpis lectus ullamcorper nisi, ut suscipit nunc urna a eros. Curabitur nec convallis lorem. Morbi nec pharetra metus, in placerat lacus. Duis sollicitudin maximus convallis. Mauris non sapien eget dolor vulputate cursus. Morbi suscipit tortor sit amet sollicitudin luctus. Nam dapibus tempor posuere.',
          date: '2018-04-01'
        }, {
          id: '3',
          name: 'Project Tres',
          description: 'Aliquam gravida eros a dui mollis, in mattis mi interdum. Aenean ultrices sed nisl ac sodales. Phasellus pellentesque a neque pharetra luctus. Sed congue iaculis nisi ac viverra. Duis est purus, ultrices non mi sed, laoreet vestibulum dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vulputate, massa vitae lacinia dignissim, ante est pretium lacus, id efficitur nisl augue non mauris. Etiam molestie, est quis vehicula tristique, enim orci congue sem, in lobortis turpis sem at quam. Proin nec commodo nulla. Morbi gravida velit egestas, facilisis ante vel, auctor orci. Suspendisse ullamcorper nisi tortor, non cursus quam bibendum in. Proin id malesuada enim, sed dictum nunc. Duis blandit placerat erat, ut laoreet risus scelerisque ac. Suspendisse tempor facilisis lobortis.',
          date: '2018-04-01'
        }, {
          id: '2',
          name: 'Project Two',
          description: 'Ut non urna non sem maximus tempor ac vel nunc. Donec dui nisi, gravida quis egestas quis, semper in tortor. Etiam pellentesque risus non magna vehicula, et egestas ex pellentesque. Suspendisse pretium consequat turpis, a ullamcorper tellus porttitor non. Suspendisse vitae diam enim. Praesent ac ante a neque viverra suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nisl risus, tristique nec velit eget, tempor interdum mi. Mauris dignissim interdum magna, id venenatis erat sollicitudin non. Nullam ex urna, pellentesque non varius quis, ultrices non nibh.',
          date: '2018-04-01'
        }, {
          id: '3',
          name: 'Project Tres',
          description: 'Curabitur ut efficitur augue. Curabitur et metus sed massa rhoncus molestie in nec metus. Curabitur et metus auctor, tincidunt mi in, finibus dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis aliquet nec nulla vitae sollicitudin. Cras urna purus, varius sed nibh quis, semper pretium metus. Nulla eu volutpat erat, at pretium justo. Cras aliquam purus id augue consequat, vitae hendrerit tellus maximus. Quisque fermentum, ipsum sed viverra laoreet, urna velit tempor elit, vel lobortis sapien ante non massa. Curabitur vel ligula sodales, mollis mauris luctus, porta leo. Vivamus porttitor enim dui, eget commodo nunc iaculis nec.',
          date: '2018-04-01'
        }
      ]
    }
  }
}


</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.padding {
  padding: 0px 15px 0 15px;
}
.background {
  background-color: $pink;
}

</style>
