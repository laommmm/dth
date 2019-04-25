<template>
    <div class="container">
        <div class="break">
            <header class="ui_header">
                <h1>我的课堂</h1>
                <dl class="action" v-tap="{methods:toPage,name:'messageNotify'}">
                    <dd class="message newMessageNum">
                        <em v-if="study.msg > 0">{{study.msg}}</em>
                    </dd>
                </dl>
            </header>
            <div class="banner boxStyle two" :class="{'noPlan':study.has_plan == '0'}">
                <template v-if="study.has_plan == '0'">
                    <dl class="top">
                        <dd>
                            <p>今日学习时长</p>
                            <em>{{study.study_today}}</em>分钟
                        </dd>
                        <dd>
                            <p>连续学习</p>
                            <em>{{study.study_days}}</em>天
                        </dd>
                    </dl>
                    <dl class="foot">
                        <dd>Oct. 12 Friday</dd>
                        <dd>
                            <button class="btnStyle" v-tap="{methods:toPage,name:'addPlan'}">+学习计划</button>
                        </dd>
                    </dl>
                </template>
                <template v-if="study.has_plan == '1'">
                    <dl class="top">
                        <dd>
                            <p>今日学习时长</p>
                            <em>{{study.study_today}}</em>分钟
                        </dd>
                        <dd>
                            <p>连续学习</p>
                            <em>{{study.study_days}}</em>天
                        </dd>
                        <dt v-tap="{methods:toPage,name: 'myPlan'}">详细记录</dt>
                    </dl>
                    <p class="time">{{String(new Date()).substring(4,7)}}.&nbsp;{{String(new Date()).substring(8,10)}}&nbsp;{{week[new
                        Date().getDay()-1]}}</p>
                    <dl class="clock">
                        <dd v-for="(item,index) in days" :key="index"
                            :class="{'out':item.iscard == '1','curr':item.istoday == '1'}">{{item.day}}
                        </dd>
                    </dl>
                </template>
            </div>
            <dl class="actionList">
                <dd v-tap="{methods:toPage,name:'studyReport'}">
                    <i class="report"></i>
                    学习战报
                </dd>
                <dd v-tap="{methods:toPage,name:'mySubs'}">
                    <i class="errorBook"></i>
                    错题本
                </dd>
            </dl>
            <div class="tabMenuBox">
                <dl class="tabMenu">
                    <dd :class="{'curr':tabMenuIdx===0}" @click="tabMenuIdx=0">
                        我的课程
                    </dd>
                    <dd :class="{'curr':tabMenuIdx===1}" @click="tabMenuIdx=1">
                        我的计划
                    </dd>
                    <dt :style="tabMenuIdx===0?'transform:translate3d(8vw,0,0)':'transform:translate3d(37vw,0,0)'"></dt>
                </dl>
                <dt>
                    <button class="btnStyle" v-tap="{methods:toPage,name:'addPlan'}" v-if="tabMenuIdx===1">+学习计划
                    </button>
                </dt>
            </div>
            <div class="courseList" v-if="tabMenuIdx===0">
                <ul v-if="classList.length > 0">
                    <li v-for="(item,index) in classList" :key="index" v-tap="{methods:toVideo,lid:item.lid}">
                        <div class="img newMessageNum">
                            <em v-if="item.isupdate != '0'">{{item.isupdate}}</em>
                            <img :src="item.thumb">
                        </div>
                        <div class="info">
                            <div class="name">{{item.course_name}}</div>
                            <div class="text">
                                <div class="textL">{{item.lesson_name}}</div>
                                <div class="textR">学至{{item.step?item.step:0}}%</div>
                            </div>
                            <div class="time">{{item.updatetime}}</div>
                        </div>
                    </li>
                </ul>
                <div class="loading-more" v-if="classList.length > 0">没有更多了</div>
                <div class="list_box" v-if="classList.length <= 0">
                    <div class="none-list"></div>
                    <div class="none-list-text">暂无课程</div>
                </div>
            </div>
            <div class="courseList" v-if="tabMenuIdx===1">
                <ul v-if="$store.state.planList.length > 0">
                    <li v-for="(item,index) in $store.state.planList" :key="index"
                        v-tap="{methods:toVideo,lid:item.lid}">
                        <div class="img newMessageNum">
                            <img :src="item.thumb">
                        </div>
                        <div class="info">
                            <div class="name">{{item.course_name}}</div>
                            <div class="text curr">
                                <div class="textL">{{item.lesson_name}}</div>
                                <div class="textR">学至{{item.step?item.step:0}}%</div>
                            </div>
                            <div class="time">{{item.times}}</div>
                        </div>
                    </li>
                </ul>
                <div class="loading-more" v-if="$store.state.planList.length > 0">没有更多了</div>
                <div class="list_box" v-if="$store.state.planList.length <= 0">
                    <div class="none-list"></div>
                    <div class="none-list-text">暂无学习计划，快去添加吧</div>
                </div>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .break {
        padding: 0 40px;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        background: #fff;
        .banner {
            height: 320px;
            background: linear-gradient(15deg, rgba(#000, 0) 0%, rgba(#23004E, 0.18) 100%) #56636E;
            position: relative;
            padding: 50px;
            box-sizing: border-box;
            color: #FFF;
            display: flex;
            flex-direction: column;
            transition: 0.5s;
            &:before {
                background: url('~@/img/break_bannerBg.png') center/100% 100%;
                content: '';
                right: 0;
                top: 0;
                width: 262px;
                height: 194px;
                position: absolute;
            }
            .top {
                display: flex;
                flex: 1;
                dd {
                    width: 200px;
                    font-size: 24px;
                    p {
                        padding-bottom: 15px;
                    }
                    em {
                        font-size: 72px;
                    }
                }
                dt {
                    text-align: right;
                    flex: 1;
                    font-size: 24px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    &:after {
                        margin-left: 15px;
                        vertical-align: -8px;
                        background: url('~@/img/moreBtn.png') center/100% 100%;
                        content: '';
                        display: inline-block;
                        width: 32px;
                        height: 32px;
                    }
                }
            }
            .foot {
                display: flex;
                position: relative;
                z-index: 100;
                dd {
                    &:first-child {
                        flex: 1;
                        font-size: 20px;
                        color: rgba(#FFF, 0.3);
                        margin: auto 0;
                    }
                    button {
                        background-color: #E86C26;
                        width: 166px;
                        height: 60px;
                        color: #FFF;
                        font-size: 24px;
                    }
                }
            }
            &.two {
                height: 360px;
                background-color: #265277;
                p.time {
                    font-size: 20px;
                    color: rgba(#FFF, 0.3);
                }
                &:before {
                    background: url('~@/img/break_bannerBg3.png') center/100% 100%;
                    content: '';
                    right: 0;
                    bottom: 0;
                    top: auto;
                    width: 147px;
                    height: 255px;
                }
                .clock {
                    display: flex;
                    margin-top: 15px;
                    dd {
                        width: 64px;
                        line-height: 64px;
                        text-align: center;
                        border-radius: 50%;
                        font-size: 28px;
                        margin-right: 4px;
                        background-color: rgba(#000, 0.2);
                        &.curr {
                            color: #354049;
                            background-color: #FFF;
                        }
                        &.out {
                            color: #77A7CF;
                        }
                    }
                }
            }
        }
        .noPlan {
            background: #56636e !important;
        }
        .actionList {
            margin-top: 40px;
            display: flex;
            dd {
                text-align: center;
                flex: 1;
                font-size: 24px;
                font-weight: 400;
                color: rgba(53, 64, 73, 1);
                i {
                    width: 90px;
                    height: 90px;
                    display: block;
                    margin: 0 auto 20px;
                    &.report {
                        background: url('~@/img/break_report.png') center/100% 100%;
                    }
                    &.errorBook {
                        background: url('~@/img/break_errorBook.png') center/100% 100%;
                    }
                }
            }
        }
        .tabMenuBox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            dt {
                button {
                    font-size: 28px;
                    font-weight: 400;
                    color: rgba(119, 167, 207, 1);
                }
            }
        }
        .tabMenu {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            line-height: 120px;
            font-size: 40px;
            width: 375px;
            dd {
                color: #AFB2B7;
                font-weight: bold;
                position: relative;
                .line {
                    position: absolute;
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
            dt {
                position: absolute;
                bottom: 10px;
                width: 40px;
                height: 8px;
                background: rgba(119, 167, 207, 1);
                transition-duration: .5s;
            }
        }
        .courseList {
            display: flex;
            flex-direction: column;
            ul {
                li {
                    padding: 20px 0;
                    display: flex;
                    .img {
                        width: 264px;
                        height: 135px;
                        background-color: #fafafa;
                        border-radius: 10px;
                        position: relative;
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 10px;
                        }
                    }
                    .info {
                        flex: 1;
                        width: 400px;
                        margin-left: 30px;
                        display: flex;
                        flex-direction: column;
                        .name {
                            font-size: 32px;
                            height: 40px;
                            line-height: 40px;
                            font-weight: bold;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        .text {
                            flex: 1;
                            font-size: 24px;
                            color: #AFB2B7;
                            display: flex;
                            margin-top: 15px;
                            &.curr {
                                color: #E86C26;
                            }
                            div {
                                margin-bottom: auto;
                            }
                            .textL {
                                flex: 1;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                        }
                        .time {
                            font-size: 24px;
                            color: #AFB2B7;
                        }
                    }
                }
            }
        }
        .none-list {
            width: 150px;
            height: 150px;
            background: url(./images/noPlan.png) no-repeat center center;
            background-size: 100%;
            margin: 100px auto 0;
        }
        .none-list-text {
            padding-bottom: 50px;
            margin-top: 28px;
            font-size: 24px;
            font-weight: 400;
            color: rgba(175, 178, 183, 1);
            text-align: center;
        }
        .loading-more {
            margin-top: 80px;
            padding-bottom: 50px;
            font-size: 28px;
            font-weight: 400;
            color: rgba(175, 178, 183, 1);
            text-align: center;
        }
    }
</style>

<script>
    import bottom from './components/mainCont';

    export default {
        name: "break",
        data() {
            return {
                tabMenuIdx: 0,
                study: {},
                classList: [],
                courseList: [],
                planArr: [],
                days: [],
                week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            }
        },
        mounted() {
            this.getInfo();
            this.getLesson();
            this.getPlan();
            if (this.$route.query.tabIndex) {
                this.tabMenuIdx = this.$route.query.tabIndex;
            }
        },
        methods: {
            getInfo() {
                this.http(this.api.member_main).then(
                    res => {
                        let response = res.data;
                        if (response.ret == '0') {
                            this.study = response.data.study;
                            this.days = this.study.days;
                        } else {
                            Toast(response.msg);
                        }
                    },
                    error => {
                        alert(error);
                    }
                );
            },
            getLesson() {
                this.http(this.api.class_mycourse).then(
                    res => {
                        let response = res.data;
                        if (response.ret == '0') {
                            this.classList = response.data.list;
                        } else {
                            Toast(response.msg);
                        }
                    },
                    error => {
                        alert(error);
                    }
                );
            },
            getPlan() {
                this.http(this.api.member_myplan).then(
                    res => {
                        let response = res.data;
                        if (response.ret === '0') {
                            this.planArr = response.data.list;
                            this.$store.commit('setMyPlanList', this.planArr);
                        } else {
                            Toast(response.msg);
                        }
                    },
                    error => {
                        alert(error);
                    }
                );
            },
            toPage(params) {
                this.$router.push({
                    name: params.name
                })
            },
            toVideo(params) {
                this.$router.push({
                    name: 'course_play',
                    params: {
                        lid: params.lid
                    }
                })
            }
        },
        components: {
            'Bottom': bottom
        }
    }
</script>

