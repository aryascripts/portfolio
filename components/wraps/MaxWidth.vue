<template>
    <div>
        <slot></slot>
    </div>    
</template>

<style lang="scss" scoped>
    div {
        max-width: 1000px;
        margin: 0 auto;

        @media screen and (max-width: 1000px) {
            max-width: 94%;
        }
    }
</style>