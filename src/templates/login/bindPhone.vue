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

    .content-input {
        margin-top: 100px;
        height: 55px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .content-input-before {
        color: #AFB2B7;

    }

    .content-input-box {
        flex: 1;
    }

    .content-input-box input {
        padding: 0;
        margin: 0;
        width: 100%;
        outline: none;
        border: 0;
        display: block;
        height: 100%;
        text-indent: 30px;
    }

    .content-line {
        width: 100%;
        height: 1px;
        background: #EEEEEE;
        margin-top: 26px;
    }

    .content-next {
        width: 670px;
        height: 100px;
        background: #77A7CF;
        opacity: 0.6;
        border-radius: 10px;
        box-shadow: 0 10px 10px 0 rgba(39, 76, 124, 0.24);
        line-height: 100px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 80px;
    }

    .content-next.right {
        transition-duration: 0.5s;
        background: #274C7C;
    }

    .content-next-text {
        margin-top: 39px;
        color: #AFB2B7;
    }

    .content-next-text a {
        color: #77A7CF;
    }

    .content-input-clear {
        width: 50px;
        height: 50px;
        background: url(./images/del.png) no-repeat center center;
        background-size: 28px 28px;
    }
</style>

<template>
    <div class="view">
        <TopBack></TopBack>
        <div class="content">
            <div class="content-title">绑定手机号</div>
            <div class="content-input">
                <div class="content-input-before font-h2">+86</div>
                <div class="content-input-box">
                    <input type="tel" class="font-h3" v-model="mobileNo" @input="checkMobileNo()"
                           placeholder="请输入11位手机号码" maxlength="11">
                </div>
                <div class="content-input-clear" v-show="mobileNo.length !== 0" v-tap="{methods:clearMobile}"></div>
            </div>
            <div class="content-line"></div>
            <div class="content-next font-h3" :class="{'right':isRight}" v-tap="{methods:toNext}">下一步</div>
            <div class="content-next-text font-t2">点击下一步，即您表示已阅读并愿意遵守洞庭湖
                <router-link tag="a" :to="{name:'agreement'}">"用户注册协议"</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bindPhone",
        data() {
            return {
                mobileNo: '',
                isRight: false
            }
        },
        mounted() {

        },
        methods: {
            toNext() {
                if (this.isRight) {
                    sessionStorage.setItem('mobile', this.mobileNo);
                    this.$router.push({
                        name: 'getCode',
                        query: {
                            identify: 'Y'
                        }
                    })
                } else {
                    Toast('您输入的手机号有误，请输入正确的手机号码');
                }
            },
            clearMobile() {
                this.mobileNo = '';
                this.isRight = false;
            },
            checkMobileNo() {
                let reg = /1\d{10}$/;
                this.isRight = reg.test(this.mobileNo);
            }
        },
        beforeDestroy() {

        }
    }
</script>
