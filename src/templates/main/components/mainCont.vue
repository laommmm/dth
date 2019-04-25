<template>
    <div class="cont">
        <dl class="mainMenu">
            <router-link tag="dd" :to="{name:'home'}">
                <i class="home"></i>
                首页
            </router-link>
            <router-link tag="dd" :to="{name:'break'}">
                <i class="lesson"></i>
                课堂
            </router-link>
            <router-link tag="dd" :to="{name:'me'}">
                <i class="me"></i>
                我的
            </router-link>
        </dl>
    </div>
</template>

<style lang="scss" type="text/scss" scoped>
    .cont {
        height: 98px;
        position:relative;
        z-index:9;
    }

    .scrollBox {
        color: #354049;
        &.contBox {
            padding-bottom: 100px;
            box-sizing: border-box;
        }
    }

    .mainMenu {
        border-top: 1px solid #f2f2f2;
        height: 98px;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 97;
        background-color: #FFF;
        color: #AFB2B7;
        font-size: 20px;
        dd {
            flex: 1;
            text-align: center;
            i {
                display: block;
                margin: 15px auto 10px;
                width: 44px;
                height: 44px;
                &.home {
                    background: url('~@/img/mainMenuIco_home.png') center/100% 100%;
                }
                &.lesson {
                    background: url('~@/img/mainMenuIco_lesson.png') center/100% 100%;
                }
                &.me {
                    background: url('~@/img/mainMenuIco_me.png') center/100% 100%;
                }
            }
            &.curr {
                color: #354049;
                .home {
                    background: url('~@/img/mainMenuIco_homeCurr.png') center/100% 100%;
                }
                .lesson {
                    background: url('~@/img/mainMenuIco_lessonCurr.png') center/100% 100%;
                }
                .me {
                    background: url('~@/img/mainMenuIco_meCurr.png') center/100% 100%;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: "home",
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

