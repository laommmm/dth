export default [
    {
        path: '/helpAndFeedback',
        name: 'helpAndFeedback',
        component: () => import(`@/templates/other/helpAndFeedback`),
        meta: {
            title: '帮助与反馈'
        }
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import(`@/templates/other/setting`),
        meta: {
            title: '设置'
        }
    }, {
        path: '/personalInfo',
        name: 'personalInfo',
        component: () => import(`@/templates/other/personalInfo`),
        meta: {
            title: '个人信息'
        }
    }, {
        path: '/about',
        name: 'about',
        component: () => import(`@/templates/other/about`),
        meta: {
            title: '关于我们'
        }
    }, {
        path: '/account',
        name: 'account',
        component: () => import(`@/templates/other/account`),
        meta: {
            title: '账号管理'
        }
    }, {
        path: '/nickname',
        name: 'nickname',
        component: () => import(`@/templates/other/nickname`),
        meta: {
            title: '昵称'
        }
    }, {
        path: '/studyReport',
        name: 'studyReport',
        component: () => import(`@/templates/other/studyReport`),
        meta: {
            title: '学习战报'
        }
    },
]
