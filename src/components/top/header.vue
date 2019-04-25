<style scoped>
    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100px;
        border-bottom: 1px solid #EEEEEE;
        background: #fff;
    }

    .top-back {
        width: 50px;
        height: 50px;
        background: url(./images/back.png) no-repeat center center;
        background-size: 22px 38px;
        margin-top: 25px;
        margin-left: 25px;
    }

    .top-title {
        height: 100px;
        line-height: 100px;
        font-size: 40px;
        font-weight: 600;
        color: rgba(53, 64, 73, 1);
    }

    .top-more {
        height: 50px;
        width: 50px;
        visibility: hidden;
        margin-top: 25px;
        margin-right: 25px;
    }
</style>

<template>
    <div class="top">
        <div class="top-back" v-tap="{methods:goBack}"></div>
        <div class="top-title">{{title}}</div>
        <div class="top-more"></div>
    </div>
</template>

<script>
    import URL from '@/libs/api';

    export default {
        name: "top",
        props: ['title'],
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

