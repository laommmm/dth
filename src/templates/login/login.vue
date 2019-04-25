<style scoped>
    .login {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(./images/bg.png) no-repeat center top;
        background-size: 100% auto;
    }

    .login-logo {
        width: 257px;
        height: 266px;
        margin: 244px auto;
        background: url(./images/logo.png) no-repeat center center;
        background-size: 100% auto;
    }

    .login-btn {
        width: 580px;
        height: 100px;
        margin: 148px auto 0;
        background: #77A7CF;
        border-radius: 10px;
        box-shadow: 0 10px 10px 0 rgba(39, 76, 124, 0.24);
        text-align: center;
        line-height: 100px;
        color: #FFFFFF;
    }

    .login-quick {
        width: 500px;
        margin: 110px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .login-quick-item-text {
        color: #939CAB;
        text-align: center;
    }

    .login-quick-item-img {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
    }

    .login-quick-item-img img {
        width: 100%;
        height: 100%;
    }

    .hide {
        visibility: hidden;
    }
</style>

<template>
    <div class="login">
        <div class="login-logo"></div>
        <div class="login-btn font-h3" v-tap="{methods:toMobileLogin}">手机号码登录</div>
        <div class="login-quick">
            <div class="login-quick-item hide" v-tap="{methods:toThird,type:'qq'}">
                <div class="login-quick-item-img">
                    <img src="./images/qq.png" alt="">
                </div>
                <div class="login-quick-item-text font-t2">QQ</div>
            </div>
            <div class="login-quick-item" v-tap="{methods:toThird,type:'weixin'}">
                <div class="login-quick-item-img">
                    <img src="./images/wechat.png" alt="">
                </div>
                <div class="login-quick-item-text font-t2">微信</div>
            </div>
            <div class="login-quick-item hide" v-tap="{methods:toThird,type:'sina'}">
                <div class="login-quick-item-img">
                    <img src="./images/sina.png" alt="">
                </div>
                <div class="login-quick-item-text font-t2">微博</div>
            </div>
        </div>
    </div>
</template>

<script>
    import URL from '@/libs/api';

    export default {
        name: "login",
        data() {
            return {
                thirdUrl: ''
            }
        },
        mounted() {
            this.quickLogin();
        },
        methods: {
            quickLogin() {
                $.ajax({
                    type: 'post',
                    url: URL.login_third,
                    data: {},
                    dataType: 'json',
                    timeout: 5000,
                    success: (res) => {
                        if (res.ret === '0') {
                            console.log(res);
                            this.thirdUrl = res.data.url;
                        } else {
                            Toast(res.msg);
                        }
                    }, error: (err) => {
                        console.log(err);
                    }
                });
            },
            toThird(params) {
                location.href = this.thirdUrl[params.type]
            },
            toMobileLogin() {
                this.$router.push({
                    name: 'mLogin'
                })
            }
        },
        beforeDestroy() {

        }
    }
</script>
