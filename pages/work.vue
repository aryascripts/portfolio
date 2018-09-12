<template>
  <div class="work">

    <div class="cs">
      <div class="content">
        <h1><span>c</span>omputer <span>s</span>cience & <span>E</span>ngineering</h1>
        <Collection v-bind:projects="projects" />
      </div>
    </div>

  </div>
</template>


<script>
import Card from './../components/Card.vue'
import Collection from './../components/Collection.vue'

export default {
  components: {
    Card,
    Collection
  },
  data() {
    return {
      projects: [{
          id: '1',
          name: 'ViewTube',
          description: 'YouTube Playlist management application for desktop platforms',
          date: '2018-04-01'
        }, {
          id: '2',
          name: 'Project Two',
          description: 'Another application that I worked on in the past',
          date: '2018-04-01'
        }, {
          id: '3',
          name: 'Project Tres',
          description: 'Yet another application that I have finished or working on',
          date: '2018-04-01'
        }, {
          id: '2',
          name: 'Project Two',
          description: 'Another application that I worked on in the past',
          date: '2018-04-01'
        }, {
          id: '3',
          name: 'Project Tres',
          description: 'Yet another application that I have finished or working on',
          date: '2018-04-01'
        }
      ]
    }
  }
}

</script>


<style scoped lang="scss">
@import './../sass/vars.scss';

.work {
  min-height: 160vh;
}

.cs {
  background-color: $pink;
  padding: 6vh 20px 0 20px;
}

.content {
  width: 100%;
  max-width: $nav-max-width;

  margin: 0 auto;
}
</style>
