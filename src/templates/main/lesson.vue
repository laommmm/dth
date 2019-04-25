<template>
    <div class="lesson">
        <header class="header lesson_item">
            <div class="back" v-tap="{methods:goBack}"></div>
            <div class="banner">
                <img :src="course.thumb"/>
            </div>
            <div class="header_info w">
                <div class="info">
                    <h2 class="title font-h1">{{course.course_name}}</h2>
                    <div class="sub_title font-t1">总课时：{{course.all_lesson}}讲</div>
                </div>
                <div class="like" v-tap="{methods:toLike}">
                    <span class="like_icon" :class="{'isFav':isLiked}"></span>{{course.favs}}
                </div>
            </div>
        </header>
        <div class="detail lesson_item">
            <div class="tabMenuBox" ref="tabMenu">
                <dl class="tabMenu" v-if="!tabFloat">
                    <dd :class="{'curr':tabMenuIdx === 0}" @click="scrollTo(0)">
                        简介
                        <em class="line"
                            :style="tabMenuIdx === 0 ? 'transform:translate3d(0,0,0)': 'transform:translate3d(30.5vw,0,0)'"></em>
                    </dd>
                    <dd :class="{'curr':tabMenuIdx === 1}" @click="scrollTo(1)">
                        课程表
                    </dd>
                </dl>
            </div>
            <div class="content_box content w" v-html="course.content">
                <!--<div class="temp_box">-->
                <!--<img src="http://file.dt-lake.com/2018100108184659.png" style="width: 100%"/>-->
                <!--<p style="line-height: 40px;">公式复杂、术语晦涩的教材，让您望而生畏吗</p>-->
                <!--<p style="line-height: 40px">在凡事有得必有失的世界里，我们如何权衡取舍？斯坦福大学最受欢迎的经济学教授，带你看懂复杂世界的真实运作！</p>-->
                <!--</div>-->
                <!--<div class="teacher">-->
                <!--<h1 class="font-h1">主讲老师</h1>-->
                <!--<div class="teacher_info">-->
                <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539375256592&di=fd42c26e3662d7394bfe033d8a0b2016&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201407%2F16%2F20140716023921_u3juM.thumb.700_0.jpeg">-->
                <!--<div class="info">-->
                <!--<div class="name">方清平</div>-->
                <!--<p class="font-t1">经济学者，现任北京大学经济学研究中心联席主任，北京大学国家发展研究院研究员</p>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
            </div>
            <div class="teacher">
                <div class="teacher-title">主讲教授</div>
                <div class="teacher-info">
                    <div class="teacher-info-icon">
                        <img :src="course.face">
                    </div>
                    <div class="teacher-info-text">
                        <div class="teacher-info-text-name">{{course.teacher}}</div>
                        <div class="teacher-info-text-dec">{{course.teacher_desc}}</div>
                    </div>
                </div>
            </div>
            <div class="split-line"></div>
            <div class="content_box lesson_list">
                <h1 class="font-h1 w">课程表&nbsp;{{lesson.length}}</h1>
                <div class="list_box">
                    <div class="list_item finish" v-for="(item,index) in lesson" v-tap="{methods:toVideo,obj:item}">
                        <div class="chapter">{{index + 1}}</div>
                        <div class="lesson_con">
                            <p class="font-h2" :class="{'play':item.isbuy === '1'}">{{item.lesson_name}}</p>
                            <div class="progress">
                                <div class="progress-left">
                                    <span><i class="time"></i>{{item.times}}</span>
                                    <span>{{item.study}}</span>
                                    <div class="new" v-if="item.isnew === '1'"></div>
                                </div>
                                <div class="testListen" v-if="item.isbuy === '0' && item.is_free === '1'"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="tabFloat" class="tabFloat">
            <dl class="tabMenu">
                <dd :class="{'curr':tabMenuIdx===0}" @click="scrollTo(0)">
                    简介
                    <em class="line"
                        :style="tabMenuIdx === 0 ? 'transform:translate3d(0,0,0)': 'transform:translate3d(30.5vw,0,0)'"></em>
                </dd>
                <dd :class="{'curr':tabMenuIdx===1}" @click="scrollTo(1)">
                    课程表
                </dd>
            </dl>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .lesson {
        background: #F7F7F7;
        /deep/ .float {
            bottom: 0;
        }
        .back {
            position: absolute;
            left: 40px;
            top: 30px;
            width: 70px;
            height: 70px;
            background: url(./images/back.png) no-repeat left top;
            background-size: 22px 38px;
        }
        .title {
            /*width: 460px;*/
            padding-right: 20px;
            line-height: 150%;
        }
        .banner {
            width: 750px;
            /*height: 325px;*/
            img {
                width: 100%;
                height: auto;
            }
        }
        .lesson_item {
            background: #fff;
        }
        .header_info {
            padding: 30px 0;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .info {
                flex: 1;
            }
        }
        .sub_title {
            color: #999999;
            margin: 20px 0;
        }
        .like {
            font-size: 24px;
            font-weight: 400;
            color: #999999;
        }

        .like_icon {
            margin-right: 10px;
            display: inline-block;
            width: 36px;
            height: 36px;
            background: url('~@/img/ico_like.png') center center no-repeat;
            background-size: 100%;
        }
        .isFav {
            background: url(./images/isFav.png) center center no-repeat;
            background-size: 100%;
        }
        .tabMenuBox {
            position: relative;
            margin: 20px auto;
            height: 120px;
        }
        .tabMenu {
            display: flex;
            margin: 0 auto;
            line-height: 120px;
            font-size: 40px;
            justify-content: space-between;
            width: 330px;
            dt {
                flex: 1;
                text-align: right;
                .btnStyle {
                    color: #77A7CF;
                    font-size: 28px;
                    height: 72px;
                }
            }
            dd {
                color: #AFB2B7;
                font-weight: bold;
                position: relative;
                .line {
                    position: absolute;
                    left: 0;
                    width: 100%;
                    transition: 0.5s;
                    height: 8px;
                    top: 100px;
                    &:before {
                        content: '';
                        height: 100%;
                        width: 40px;
                        margin: auto;
                        display: block;
                        background-color: #77A7CF;
                    }
                }
                &.curr {
                    color: #354049;
                }
            }
        }
        .content_box {
            padding: 20px 0;
        }
        .temp_box {
            padding: 30px 0;
        }
        .teacher_info {
            padding: 30px 0;
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;

            img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
            }
            .info {
                flex: 1;
                margin: auto 0;
                margin-left: 20px;
            }
            .name {
                font-size: 32px;
                color: #354049;
                margin-bottom: 10px;
            }
            p {
                line-height: 40px;
                color: #999999;
            }
        }
        .list_box {
            margin-left: 40px;
            padding: 30px 0;
            .list_item {
                display: -webkit-flex;
                display: flex;
                padding: 40px 0;
                border-bottom: 1px solid #EEEEEE;
                &.finish {
                    color: #AFB2B7;
                }
            }
            .lesson_con {
                flex: 1;
                margin-left: 20px;
                .play {
                    margin-right: 40px;
                    background: url(./images/play.png) no-repeat right center;
                    background-size: 24px 28px;
                }
                p {
                    color: #354049;
                    line-height: 45px;
                }
            }
            .progress {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-top: 20px;
                font-size: 24px;
                font-weight: 400;
                color: rgba(175, 178, 183, 1);
                line-height: 44px;
                .testListen {
                    margin-right: 40px;
                    width: 57px;
                    height: 28px;
                    background: url(./images/test.png) no-repeat center center;
                    background-size: 100%;
                }
                .progress-left {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    span:first-child {
                        background: url(./images/times.png) no-repeat left center;
                        background-size: 18px 18px;
                        text-indent: 30px;
                        display: inline-block;
                    }
                    span:nth-child(2) {
                        margin-left: 38px;
                        display: inline-block;
                    }
                    .new {
                        margin-left: 30px;
                        width: 57px;
                        height: 26px;
                        background: url(./images/new.png) no-repeat center center;
                        background-size: 100%;
                    }
                }
            }
        }
    }

    .teacher {
        margin-top: 50px;
        padding: 0 40px;
    }

    .teacher-title {
        font-size: 36px;
        font-weight: 600;
        color: rgba(53, 64, 73, 1);
        line-height: 44px;
    }

    .teacher-info {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: flex-start;
        margin-top: 39px;
    }

    .teacher-info-icon {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .teacher-info-text {
        margin-left: 21px;
    }

    .teacher-info-text-name {
        height: 60px;
        font-size: 28px;
        font-weight: 400;
        color: rgba(53, 64, 73, 1);
        line-height: 60px;
    }

    .teacher-info-text-dec {
        font-size: 24px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 36px;
        width: 534px;
    }

    .split-line {
        width: 750px;
        height: 20px;
        background: rgba(247, 247, 247, 1);
        margin: 81px 0 40px 0;
    }

    .tabFloat {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        transition: 0.5s;
        margin: 0 !important;
        background-color: #FFF;
        box-shadow: 0 4px 16px rgba(#274C7C, 0.1);
    }
</style>

<script>
    import URL from '@/libs/api';

    export default {
        name: "lesson",
        data() {
            return {
                tabMenuIdx: 0,
                course: {},
                isLiked: false,
                page: 1,
                lesson: [],
                tabFloat: false,
                isClick: false
            }
        },
        mounted() {
            this.lessonDataShowFn();
            this.getLesson();
            setTimeout(() => {
                this.scroll();
            }, 1000);
        },
        methods: {
            lessonDataShowFn() {
                $.ajax({
                    type: 'post',
                    url: URL.lesson_detail,
                    data: {
                        cid: this.$route.params.cid
                    },
                    dataType: 'json',
                    success: (res) => {
                        if (res.ret === '0') {
                            this.course = res.data.course;
                            this.isLiked = this.course.isfav === '1';
                        } else {
                            Toast(res.msg);
                        }
                    },
                    error: (err, xhr) => {
                        console.log(err);
                    }
                })
            },
            toLike() {
                $.ajax({
                    type: 'post',
                    url: URL.lesson_fav,
                    data: {
                        cid: this.$route.params.cid
                    },
                    dataType: 'json',
                    success: (res) => {
                        if (res.ret === '0') {
                            if (this.isLiked) {
                                Toast('取消点赞成功');
                            } else {
                                Toast('点赞成功');
                            }
                            this.lessonDataShowFn();
                        } else {
                            Toast(res.msg);
                        }
                    },
                    error: (err, xhr) => {
                        console.log(err);
                    }
                })
            },
            getLesson() {
                $.ajax({
                    type: 'post',
                    url: URL.lesson_lesson,
                    data: {
                        cid: this.$route.params.cid
                    },
                    dataType: 'json',
                    success: (res) => {
                        if (res.ret === '0') {
                            this.lesson = res.data.list;
                        } else {
                            Toast(res.msg);
                        }
                    },
                    error: (err, xhr) => {
                        console.log(err);
                    }
                })
            },
            scroll() {
                let menuTop = this.$refs.tabMenu.offsetTop;
                let list = document.getElementsByClassName("content_box");
                $(window).scroll(() => {
                    if (!this.$refs.tabMenu) {
                        $(window).unbind();
                        return false;
                    }
                    let playScrollY = Math.round($(window).scrollTop());
                    if (menuTop === playScrollY) {
                        return false;
                    }
                    let screenHeight = $(window).height();
                    this.tabFloat = playScrollY >= this.$refs.tabMenu.offsetTop;
                    if (!this.isClick) {
                        for (let i = 0; i < list.length; i++) {
                            let item = list[i];
                            if (playScrollY >= item.offsetTop - this.$refs.tabMenu.offsetHeight - screenHeight + 200) {
                                this.tabMenuIdx = i * 1;
                            }
                        }
                    }
                })
            },
            toVideo(params) {
                let item = params.obj;
                // 没有购买课程或免费课程 0否 1是
                let canGo = item.isbuy === '1' || item.is_free === '1';
                if (canGo) {
                    this.$router.push({
                        name: 'course_play',
                        params: {
                            lid: item.lid
                        }
                    })
                } else {
                    Toast('您还没有购买该课程，不能观看');
                }

            },
            scrollTo(idx) {
                let list = document.getElementsByClassName("content_box");
                this.tabMenuIdx = idx;
                this.isClick = true;
                $.when($('body,html').animate({'scrollTop': list[idx].offsetTop - this.$refs.tabMenu.offsetHeight}, 500)).then(() => {
                    this.isClick = false;
                })
            }
        },
        beforeDestroy() {
            $(window).unbind();
        }
    }
</script>

