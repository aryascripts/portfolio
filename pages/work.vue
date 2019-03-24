<template>
  <div class="work">

    <div class="cs">
      <div class="content">
        <Collection
          v-for="col in collections"
          v-bind:projects="col.projects"
          v-bind:name="col.name"
          v-bind:key="col.key" />

      </div>
    </div>

  </div>
</template>

<script>
import Card from './../components/Card.vue'
import Collection from './../components/Collection.vue'
import SiteData from './../utils/content.js'

export default {
  components: {
    Card,
    Collection
  },
  methods: {

  },
  data() {
    return {
        collections: [],
    }
  },
  created() {
    this.collections = SiteData.getCollections()
                          .map(collection => {
                            const key = collection.key;
                            collection.projects = SiteData.getProjectsForCollection(key);
                            return collection;
                          });
  }
}
</script>

<style scoped lang="scss">
@import './../sass/vars.scss';

.work {
  min-height: 160vh;
}

.cs {
  padding: 6vh 20px 0 20px;
}
</style>
