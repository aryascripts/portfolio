<template>
    <div class="media-item">

        <img v-on:click="open()" v-if="img" class="thumbnail" v-bind:src="img" />
        <div class="media-content">
            <h3 v-on:click="open()" class="pointer">{{ title }}</h3>
            <p>
                {{ description }}
            </p>
            <p>
                On {{ date }}
            </p>
        </div>

    </div>
</template>


<script>
export default {
    props: [
        'title',
        'description',
        'date',
        'link',
        'linkText',
        'source',
        'img'
    ],
    methods: {
        open() {
            window.open(this.link, '_blank');
        }
    }
}
</script>

<style scoped lang="scss">
.thumbnail {
    height: 100px;
}
.media-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    img {
        margin-right: 12px;
    }

    h3 {
        margin-top: 0;
    }

    .content {
        flex-grow: 1; 
    }
}

</style>