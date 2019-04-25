<template>
    <div class="container">
        <div class="home">
            <header class="w">
                <h1 class="logo"></h1>
                <dl class="action">
                    <router-link tag="dd" class="sign" :class="{'newMessageDot':signNew}"
                                 :to="{name:'signIn'}"></router-link>
                    <router-link tag="dd" :to="{name:'history'}" class="history"></router-link>
                </dl>
            </header>
            <swiper class="banner" :options="bannerOption" ref="bannerSwiper" v-if="indexData.ad">
                <swiper-slide v-for="(item,idx) of indexData.ad" :key="idx">
                    <a :href="item.ad_url">
                        <img :src="item.picture" :alt="item.ad_name">
                    </a>
                </swiper-slide>
                <div class="bannerPag" slot="pagination"></div>
            </swiper>
            <a :href="indexData.active.url" v-if="indexData.active">
                <div class="newActivity w">
                    <h2 class="title">最新活动</h2>
                    <p v-if="indexData.active">{{indexData.active.title}}</p>
                </div>
            </a>
            <div class="myLesson" v-if="indexData.my">
                <div class="ui_mainTitle w">
                    <h2>我的课程</h2>
                    <router-link tag="div" :to="{'name':'break'}" class="more">全部</router-link>
                </div>
                <ul>
                    <router-link :to="{name:'course_play',params:{lid:item.lid}}" tag="li"
                                 v-for="(item,idx) of indexData.my" :key="idx">
                        <div class="box boxStyle">
                            <div class="img">
                                <img :src="item.thumb" alt="">
                                <div class="imgInfo">
                                    <div class="imgName">{{item.lesson_name}}</div>
                                    <div class="imgNum">学至{{item.step}}</div>
                                </div>
                            </div>
                            <div class="info">
                                <div class="name">{{item.course_name}}</div>
                                <div class="text">
                                    <div class="text_l"><span>{{item.teacher}}</span> {{item.teacher_tags}}</div>
                                    <div class="text_r"><span>{{item.buys}}</span>人在学</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </ul>
            </div>
            <div class="recommend w">
                <div class="ui_mainTitle">
                    <h2>核心课程</h2>
                </div>
                <ul>
                    <router-link :to="{name:'lesson',params:{cid:item.cid}}" tag="li" class="boxStyle"
                                 v-for="(item,idx) of indexData.course" :key="idx">
                        <div class="img">
                            <img :src="item.picture">
                        </div>
                        <div class="info">
                            <div class="name">{{item.course_name}}</div>
                            <div class="text">
                                <div class="text_l"><span>{{item.teacher}}</span> {{item.teacher_tags}}</div>
                                <div class="text_r"><span>{{item.buys}}</span>人在学</div>
                            </div>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import bottom from './components/mainCont';
    export default {
        name: "home",
        data() {
            return {
                signNew: false,
                bannerOption: {
                    autoplay: {
                        disableOnInteraction: false
                    },
                    loop: true,
                    loopAdditionalSlides: 2,
                    observer: true,
                    observeParents: true,
                },
                indexData: ''
            }
        },
        mounted() {
            this.indexDataShowFn();
        },
        methods: {
            indexDataShowFn() {
                this.http(this.api.lesson_main).then(
                    res => {
                        this.indexData = res.data.data;
                        this.signNew = this.indexData.iscard * 1 === 0 ? true : false;
                    },
                    error => {
                        alert(error);
                    }
                );
            }
        },
        beforeDestroy() {

        },
        components: {
            'Bottom': bottom
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .home {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        background: #fff;
        header {
            height: 124px;
            display: flex;
            .logo {
                flex: 1;
                height: 44px;
                margin: auto 0;
                background: url('~@/img/logo.png') left center/auto 100% no-repeat;
            }
            .action {
                height: 44px;
                margin: auto 0;
                display: flex;
                dd {
                    margin-left: 37px;
                    width: 44px;
                    height: 44px;
                    position: relative;
                    &.sign {
                        background: url('~@/img/ico_sign.png') center/100% 100%;
                    }
                    &.history {
                        background: url('~@/img/ico_history.png') center/100% 100%;
                    }
                }
            }
        }
        .banner {
            width: 670px;
            height: 320px;
            overflow: initial !important;
            .swiper-slide {
                overflow: hidden;
                border-radius: 10px;
                transition: 0.5s;
                transform: scale(0.875, 0.875);
                img {
                    width: 100%;
                }
                &.swiper-slide-active {
                    box-shadow: 0 10px 30px rgba(#274C7C, 0.3);
                    transform: scale(1, 1) !important;
                }
                &.swiper-slide-prev {
                    transform: translateX(20px) scale(0.875, 0.875);
                }
                &.swiper-slide-next {
                    transform: translateX(-20px) scale(0.875, 0.875);
                }
            }
        }
        a{
            text-decoration: none!important;
        }
        .newActivity {
            margin-top: 40px;
            display: flex;
            background-color: #F7FAFC;
            line-height: 90px;
            border-radius: 10px;
            .title {
                width: 179px;
                height: 36px;
                margin: auto 30px;
                overflow: hidden;
                text-indent: 99em;
                background: url('~@/img/home_newActivityTitle.png') center/100% 100%;
            }
            p {
                color: #77A7CF;
                font-size: 24px;
                flex: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            &:after {
                content: '';
                width: 32px;
                height: 32px;
                background: url('~@/img/home_newActivityMore.png') center/100% 100%;
                margin: auto 30px;
            }
        }
        .myLesson {
            margin-top: 20px;
            ul {
                display: -webkit-box;
                overflow-x: scroll;
                padding-left: 40px;
                padding-bottom: 50px;
                li {
                    width: 630px;
                    .box {
                        width: 590px;
                    }
                    .img {
                        position: relative;
                        height: 330px;
                        background-color: #EEE;
                        overflow: hidden;
                        img {
                            width: 100%;
                        }
                        .imgInfo {
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            height: 20%;
                            background: linear-gradient(to bottom, rgba(#000, 0) 0%, rgba(#000, 0.7) 100%);
                            color: #FFF;
                            display: flex;
                            font-size: 24px;
                            padding: 0 32px;
                            line-height: 60px;
                            .imgName {
                                flex: 1;
                            }
                            div {
                                margin-top: auto;
                            }
                        }
                    }
                    .info {
                        padding: 30px;
                        overflow:hidden;
                        .name {
                            font-size: 36px;
                            line-height:1.5;
                            font-weight: bold;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .text {
                            margin-top: 20px;
                            color: #AFB2B7;
                            font-size: 24px;
                            display: flex;
                            .text_l {
                                flex: 1;
                                span {
                                    color: #354049;
                                }
                            }
                            .text_r span {
                                color: #E86C26;
                            }
                        }
                    }
                }
            }
        }
        .recommend {
            margin-top: -30px;
            ul {
                li {
                    margin-bottom: 40px;
                    .img {
                        position: relative;
                        overflow: hidden;
                        height: 320px;
                        background-color: #EEE;
                        img {
                            width: 100%;
                        }
                    }
                    .info {
                        padding: 30px;
                      overflow:hidden;
                        .name {
                            font-size: 36px;
                            line-height:1.5;
                            font-weight: bold;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .text {
                            margin-top: 20px;
                            color: #AFB2B7;
                            font-size: 24px;
                            display: flex;
                            .text_l {
                                flex: 1;
                                span {
                                    color: #354049;
                                }
                            }
                            .text_r span {
                                color: #E86C26;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
