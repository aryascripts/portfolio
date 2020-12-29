<template>
    <div class="media-item pointer">
        <div class="image">
            <img v-on:click="open()" v-if="img" class="thumbnail" v-bind:src="img" />
            <div class="type"> {{ type }} </div>
        </div>
        <div class="media-content">
            <h4 v-on:click="open()">{{ title }}</h4>
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
        'type',
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
@import '~/sass/vars.scss';
@import '~/sass/global.scss';

$r: 20px;
$tag-m: 12px;

.media-item {
    margin: 0 20px 20px 0;
    width: 100%;
    max-width: 300px;
    position: relative;
    border-radius: 20px;
    @include transition(all 150ms ease-in);
    box-shadow: 1px 1px 4px rgba(46, 46, 46, 0.2);

    &:hover {
        margin-bottom: 18px;
        box-shadow: 2px 2px 6px rgba(0,0,0, 0.3);
    }

    .type {
        @extend h2;
        color: $dark-gray;
        font-weight: 600;
        font-size: 0.9rem;
        line-height: 0.8rem;
        position: absolute;
        top: 0;
        left: 0;
        margin: $tag-m 0 0 $tag-m;

        background-color: rgba(255,255,255,0.8);
        padding: 2px 5px;
        border-radius: 4px;
    }

    .image {
        width: inherit;
        height: 150px;;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden
    }
    .image img {
        flex-shrink: 0;
        height: inherit;
        min-width: 100%;
        border-radius: $r $r 0 0;
    }
    
    .media-content {
        width: inherit;
        max-width: inherit;
        bottom: 0;
        border-radius: 0 0 $r $r;
        background-color: #FEFAFA;
        padding: 5px 8px;

        h4 {
            margin-top: 0;
            width: inherit;
        }
    }
}

</style>