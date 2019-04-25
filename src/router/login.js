export default [
    {
        path: '/login',
        name: 'login',
        component: () => import(`@/templates/login/login.vue`),
        meta: {
            title: '登录',
            keepAlive: true
        }
    },
    {
        path: '/mLogin',
        name: 'mLogin',
        component: () => import(`@/templates/login/mLogin.vue`),
        meta: {
            title: '手机号登录',
            keepAlive: true
        }
    },
    {
        path: '/getCode',
        name: 'getCode',
        component: () => import(`@/templates/login/getCode.vue`),
        meta: {
            title: '输入验证码',
            keepAlive: true
        }
    },
    {
        path: '/identify',
        name: 'identify',
        component: () => import(`@/templates/login/identify.vue`),
        meta: {
            title: '身份认证',
            keepAlive: true
        }
    },
    {
        path: '/bindPhone',
        name: 'bindPhone',
        component: () => import(`@/templates/login/bindPhone.vue`),
        meta: {
            title: '绑定手机号',
            keepAlive: true
        }
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: () => import(`@/templates/login/agreement.vue`),
        meta: {
            title: '用户注册协议',
            keepAlive: true
        }
    }
]
