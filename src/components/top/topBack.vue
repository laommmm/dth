<style scoped>
    .top-back {
        width: 50px;
        height: 50px;
        background: url(./images/back.png) no-repeat center center;
        background-size: 22px 38px;
        margin-top: 25px;
        margin-left: 25px;
    }
</style>

<template>
    <div class="top" v-tap="{methods:goBack}">
        <div class="top-back"></div>
    </div>
</template>

<script>
    import URL from '@/libs/api';
    export default {
        name: "topBack",
        data() {
            return {}
        },
        mounted() {

        },
        methods: {},
        beforeDestroy() {

        }
    }
</script>

