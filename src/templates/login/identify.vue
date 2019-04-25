<style scoped>
    .content {
        width: 670px;
        margin: 0 auto;
    }

    .content-title {
        margin-top: 62px;
        font-weight: 600;
        color: #354049;
        font-size: 50px;
    }

    .content-code {
        margin-top: 70px;
        border-bottom: 1px solid #EEEEEE;
    }

    .content-code input {
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        line-height: 86px;
        width: 100%;
    }

    .content-id {
        margin-top: 20px;
        border-bottom: 1px solid #EEEEEE;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .content-id input {
        line-height: 86px;
        flex: 1;
        padding: 0;
        margin: 0;
        display: block;
        border: 0;

    }

    .content-id-close {
        width: 50px;
        height: 50px;
        background: url(./images/del.png) no-repeat center center;
        background-size: 28px 28px;
    }

    .content-complete {
        width: 670px;
        height: 100px;
        background: rgba(119, 167, 207, 1);
        box-shadow: 0 10px 10px 0 rgba(39, 76, 124, 0.24);
        opacity: 0.5;
        border-radius: 10px;
        text-align: center;
        line-height: 100px;
        color: #fff;
        margin-top: 80px;
        transition-duration: 500ms;
    }

    .canNext {
        background: #274C7C;
    }

    .stroll {
        margin-top: 34vh;
        font-size: 28px;
        font-weight: 400;
        color: rgba(175, 178, 183, 1);
        text-align: center;
    }
</style>

<template>
    <div class="container">
        <TopBack></TopBack>
        <div class="content">
            <div class="content-title">身份认证</div>
            <div class="content-code">
                <input type="text" v-model="receiveCode" @input="checkInput" class="font-h3" placeholder="请输入邀请码">
            </div>
            <div class="content-id">
                <input type="tel" v-model="schoolId" @input="checkInput" class="font-h3" placeholder="请输入大学学号">
                <div class="content-id-close" v-show="schoolId.length !== 0" v-tap="{methods:clearSchoolId}"></div>
            </div>
            <div class="content-complete" :class="{'canNext':hasInput}" v-tap="{methods:toCheck}">完成</div>
            <router-link tag="div" :to="{name:'home'}" class="stroll">随便逛逛</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "identify",
        data() {
            return {
                receiveCode: '',
                schoolId: '',
                hasInput: false
            }
        },
        mounted() {
            this.receiveCode = this.$route.query.code;
            this.getReceiveCode();
        },
        methods: {
            clearSchoolId() {
                this.schoolId = '';
                this.hasInput = false;
            },
            toCheck() {
                this.http(this.api.member_check, {
                    student_no: this.schoolId,
                    code: this.receiveCode
                }).then(
                    res => {
                        let response = res.data;
                        if (response.ret === '0') {
                            Toast('认证成功!');
                            this.$router.push({
                                name: 'home'
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
            checkInput() {
                this.hasInput = this.schoolId !== '' && this.receiveCode !== '';
            },
            getReceiveCode() {
                this.http(this.api.login_getcode).then(
                    res => {
                        let response = res.data;
                        if (response.ret === '0') {
                            if (response.data.code.length > 0) {
                                this.receiveCode = response.data.code;
                            }
                        } else {
                            Toast(response.msg);
                        }
                    },
                    error => {
                        alert(error);
                    }
                );
            }
        },
        beforeDestroy() {

        }
    }
</script>

