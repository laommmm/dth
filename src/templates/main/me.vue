<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .me {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        background: #fff;
    }

    .top {
        position: relative;
        padding: 0 40px;
        width: 670px;
        height: 500px;
        background: #354049;
        display: flex;
        flex-direction: column;
        z-index: 1;
    }

    .top-info {
        margin-top: 116px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .top-info-name {
        flex: 1;
    }

    .top-info-name-text {
        height: 60px;
        line-height: 60px;
        font-size: 50px;
        font-weight: 600;
        color: #FFFFFF;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 400px;
    }

    .top-info-name-school {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 38px;
    }

    .top-info-header {
        width: 150px;
        height: 150px;
        border-radius: 150px;
        overflow: hidden;
    }

    .top-info-header img {
        width: 100%;
        height: 100%;
    }

    .top-info-arrow {
        margin-left: 34px;
        width: 16px;
        height: 27px;
        background: url(./images/right_arrow.png) no-repeat center center;
        background-size: cover;
    }

    .top-lesson {
        margin-top: 86px;
        width: 420px;
        color: #FFFFFF;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .top-lesson-item-num {
        font-size: 36px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 38px;
    }

    .top-lesson-item-text {
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 38px;
        opacity: 0.6;
    }

    .content {
        position: relative;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding-top: 40px;
        margin-top: -50px;
        z-index: 1;
        background: #fff;
    }

    .content-index {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        width: 580px;
    }

    .content-index-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content-index-item-icon {
        width: 60px;
        height: 60px;
        background: url(./images/history.png) no-repeat center center;
        background-size: cover;
    }

    .content-index-item-text {
        margin-top: 18px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(53, 64, 73, 1);
        line-height: 38px;
    }

    .content-index-item-text span {
        color: #AFB2B7;
    }

    .content-index-item-note {
        background: url(./images/note.png) no-repeat center center;
        background-size: cover;
    }

    .content-index-item-wrong {
        background: url(./images/wrong.png) no-repeat center center;
        background-size: cover;
    }

    .content-line {
        margin-top: 40px;
        width: 710px;
        height: 1px;
        background: rgba(238, 238, 238, 1);
        margin-left: 40px;
    }

    .content-item {
        position: relative;
        height: 113px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 0 40px;
        padding-right: 40px;
        border-bottom: 1px solid rgba(238, 238, 238, 1);
    }

    .content-item-text {
        height: 34px;
        font-size: 36px;
        font-weight: 600;
        color: rgba(53, 64, 73, 1);
        line-height: 38px;
    }

    .content-item-arrow {
        width: 17px;
        height: 26px;
        background: url(./images/arrow.png) no-repeat center center;
        background-size: cover;
    }

    .content-item-verb {
        position: absolute;
        right: 85px;
        height: 113px;
        line-height: 113px;
        font-size: 32px;
        font-weight: 400;
        color: rgba(119, 167, 207, 1);
    }
</style>

<template>
    <div class="container">
        <div class="me">
            <div class="top">
                <div class="top-info" v-tap="{methods:toPage,name:'personalInfo'}">
                    <div class="top-info-name">
                        <div class="top-info-name-text">{{$store.state.nickName}}</div>
                        <div class="top-info-name-school">{{user.major || '点击完善个人信息'}}</div>
                    </div>
                    <div class="top-info-header">
                        <img :src="$store.state.userFace" alt="">
                    </div>
                    <div class="top-info-arrow"></div>
                </div>
                <div class="top-lesson">
                    <div class="top-lesson-item">
                        <div class="top-lesson-item-num">{{user.all_time}}'</div>
                        <div class="top-lesson-item-text">累计学习</div>
                    </div>
                    <div class="top-lesson-item">
                        <div class="top-lesson-item-num">{{user.week_time}}'</div>
                        <div class="top-lesson-item-text">本周学习</div>
                    </div>
                    <div class="top-lesson-item">
                        <div class="top-lesson-item-num">{{user.day_time}}'</div>
                        <div class="top-lesson-item-text">今日学习</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content-index">
                    <router-link tag="div" :to="{name:'history'}" class="content-index-item">
                        <div class="content-index-item-icon"></div>
                        <div class="content-index-item-text">历史</div>
                    </router-link>
                    <div class="content-index-item" v-tap="{methods:toPage,name:'myNote'}">
                        <div class="content-index-item-icon content-index-item-note"></div>
                        <div class="content-index-item-text">笔记<span></span></div>
                    </div>
                    <div class="content-index-item" v-tap="{methods:toPage,name:'mySubs'}">
                        <div class="content-index-item-icon content-index-item-wrong"></div>
                        <div class="content-index-item-text">错题本</div>
                    </div>
                </div>
                <div class="content-line"></div>
                <div class="content-item" v-if="user.check_state === '0'" v-tap="{methods:toPage,name:'identify'}">
                    <div class="content-item-text">身份认证</div>
                    <div class="content-item-arrow"></div>
                </div>
                <div class="content-item" v-if="user.is_teacher === '1'" v-tap="{methods:toPage,name:'workbench'}">
                    <div class="content-item-text">我的工作台</div>
                    <div class="content-item-arrow"></div>
                </div>
                <div class="content-item" v-tap="{methods:toPage, name: 'break', query: {tabIndex:1}}">
                    <div class="content-item-text">学习计划</div>
                    <div class="content-item-arrow"></div>
                    <div class="content-item-verb">{{user.has_plan === '0'? '去添加':(user.mod?`今日剩余${user.mod}`:'去添加')}}
                    </div>
                </div>
                <div class="content-item" v-tap="{methods:toPage,name:'studyReport'}">
                    <div class="content-item-text">学习战报</div>
                    <div class="content-item-arrow"></div>
                </div>
                <div class="content-item" v-tap="{methods:toPage,name:'helpAndFeedback'}">
                    <div class="content-item-text">帮助与反馈</div>
                    <div class="content-item-arrow"></div>
                </div>
                <div class="content-item" v-tap="{methods:toPage,name:'setting'}">
                    <div class="content-item-text">设置</div>
                    <div class="content-item-arrow"></div>
                </div>
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
                user: {}
            }
        },
        mounted() {
            this.gerUserInfo();

        },
        methods: {
            toMyPlan() {
                this.$router.push({
                    name: 'myPlan'
                })
            },
            gerUserInfo() {
                this.http(this.api.member_my).then(
                    res => {
                        let response = res.data;
                        console.log(response);
                        if (response.ret == '0') {
                            this.user = response.data.user;
                            this.$store.commit('setNickName', this.user.nickname);
                            this.$store.commit('setUserFace', this.user.face);
                            this.$store.commit('setMobile', this.user.mobile);
                        } else if (response.ret == '2000') {
                            this.$router.push({
                                name: 'login'
                            })
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
                    name: params.name,
                    query: params.query
                })
            }
        },
        components: {
            'Bottom': bottom
        },
        beforeDestroy() {

        }
    }
</script>

