<style scoped>
    .content {
        width: 670px;
        margin: 0 auto;
        overflow: hidden;
    }

    .content-title {
        margin-top: 62px;
        font-weight: 600;
        color: #354049;
        font-size: 50px;
    }

    .content-text {
        color: #AFB2B7;
        margin-top: 30px;
    }

    .content-receive {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        height: 70px;
        margin-top: 56px;
    }

    .content-receive-text {
        color: #AFB2B7;
    }

    .content-receive-get {
        border: 2px solid #77A7CF;
        border-radius: 10px;
        padding: 18px 24px;
        color: #77A7CF;
    }

    .content-input {
        position: relative;
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto 0;
        z-index: 20;
    }

    .content-input-text {
        width: 100px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        border: 2px solid #D8D9DB;
        border-radius: 10px;
        font-size: 72px;
        font-weight: 400;
        color: rgba(53, 64, 73, 1);
    }

    .content-input-text.focus {
        border: 2px solid #77A7CF;
    }

    #codeInput {
        padding: 0;
        margin: 0;
        display: block;
        outline: none;
        border: 0;
        color: transparent;
        background: transparent;
        text-indent: 999em;
    }

    .content-input .content-hide-box {
        position: absolute;
        right: -100px;
        width: 100px;
        height: 120px;
        background: #fff;
        z-index: 1000;
    }

    .isGet {
        color: #77A7CF;
        border: 0;
    }
</style>

<template>
    <div class="view">
        <TopBack></TopBack>
        <div class="content">
            <div class="content-title">请输入验证码</div>
            <div class="content-text font-t1">已发送至手机 {{mobile}}</div>
            <div class="content-receive">
                <div class="content-receive-text font-t2">4位数字验证码</div>
                <div class="content-receive-get font-t1" :class="{'isGet':isGet}" v-tap="{methods:toGetCode}">
                    {{codeText}}
                </div>
            </div>
            <div class="content-input">
                <label for="codeInput" class="content-input-text" :class="{'focus':code.length === 0}">{{num1}}</label>
                <label for="codeInput" class="content-input-text" :class="{'focus':code.length === 1}">{{num2}}</label>
                <label for="codeInput" class="content-input-text" :class="{'focus':code.length === 2}">{{num3}}</label>
                <label for="codeInput" class="content-input-text" :class="{'focus':code.length === 3}">{{num4}}</label>
            </div>
        </div>
        <input id="codeInput" type="number" v-model="code" value="" maxlength="4" @input="checkCode()">
    </div>
</template>

<script>
    import URL from '@/libs/api';

    export default {
        name: "getCode",
        data() {
            return {
                mobile: '',
                phone: '',
                code: '',
                isGet: false,
                minutes: 60,
                codeText: '重新获取',
                timer: null,
                identify: false
            }
        },
        mounted() {
            this.phone = sessionStorage.getItem("mobile");
            this.mobile = this.phone.substring(0, 3) + "****" + this.phone.substring(7);
            this.identify = this.$route.query.identify;
            if (this.identify) {
                this.getCode();
            } else {
                this.getCode('login');
            }
            $("#codeInput").focus();
        },
        methods: {
            checkCode() {
                if (this.code.length === 4) {
                    $("#codeInput").blur();
                    if (this.identify) {
                        $.ajax({
                            type: 'post',
                            url: URL.login_bind,
                            data: {
                                mobile: this.phone,
                                code: this.code
                            },
                            dataType: 'json',
                            success: (res) => {
                                console.log(res);
                                if (res.ret == '0') {
                                    Toast('绑定成功');
                                    this.$router.push({
                                        name: 'identify'
                                    });
                                } else {
                                    Toast(res.msg);
                                }
                                this.code = '';
                            },
                            error: (err, xhr) => {
                                console.log(err);
                            }
                        })
                    } else {
                        $.ajax({
                            type: 'post',
                            url: URL.login_mlogin,
                            data: {
                                mobile: this.phone,
                                code: this.code,
                                before: '86'
                            },
                            dataType: 'json',
                            success: (res) => {
                                console.log(res);
                                if (res.ret == '0') {
                                    Toast('登录成功');
                                    let check_state = res.data.check_state;
                                    if (check_state === '0') {
                                        // 未认证
                                        this.$router.push({
                                            name: 'identify'
                                        })
                                    } else {
                                        // 已认证
                                        this.$router.push({
                                            name: 'home'
                                        })
                                    }
                                } else {
                                    Toast(res.msg);
                                }
                                this.code = '';
                            },
                            error: (err, xhr) => {
                                console.log(err);
                            }
                        })
                    }
                }
            },
            getCode(type) {
                let data = {
                    mobile: this.phone,
                };
                if (type) {
                    data.type = type;
                }
                $.ajax({
                    type: 'post',
                    url: URL.login_code,
                    data: data,
                    dataType: 'json',
                    timeout: 5000,
                    success: (res) => {
                        if (res.ret == '0') {
                            Toast('验证码已发送到您的手机，请注意查收');
                            this.pause();
                            this.isGet = true;
                        } else {
                            Toast(res.msg);
                            this.isGet = false;
                        }
                    }, error: (err, xhr) => {
                        console.log(err);
                        this.isGet = false;
                    }
                });
            },
            pause() {
                this.codeText = `${this.minutes}S`;
                this.timer = setTimeout(() => {
                    this.minutes--;
                    if (this.minutes < 0) {
                        clearTimeout(this.timer);
                        this.minutes = 60;
                        this.isGet = false;
                        this.codeText = '重新获取';
                    } else {
                        this.pause();
                    }
                }, 1000);
            },
            toGetCode() {
                if (this.isGet === false) {
                    this.getCode();
                }
            }
        },
        computed: {
            num1() {
                return String(this.code).substring(0, 1);
            },
            num2() {
                return String(this.code).substring(1, 2);
            },
            num3() {
                return String(this.code).substring(2, 3);
            },
            num4() {
                return String(this.code).substring(3, 4);
            }
        },
        beforeDestroy() {

        }
    }
</script>

