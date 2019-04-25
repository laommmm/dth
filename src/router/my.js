export default [
    {
        path: '/history',
        name: 'history',
        component: () => import(`@/templates/my/history.vue`),
        meta: {
            title: '播放历史'
        }
    },
    {
        path: '/myNote',
        name: 'myNote',
        component: () => import(`@/templates/my/myNote.vue`),
        meta: {
            title: '我的笔记'
        }
    },
    {
        path: '/noteList',
        name: 'noteList',
        component: () => import(`@/templates/my/noteList.vue`),
        meta: {
            title: '笔记列表'
        }
    },
    {
        path: '/myAnswer',
        name: 'myAnswer',
        component: () => import(`@/templates/my/myAnswer.vue`),
        meta: {
            title: '我的回答'
        }
    },
    {
        path: '/mySubs',
        name: 'mySubs',
        component: () => import(`@/templates/my/mySubs.vue`),
        meta: {
            title: '错题本'
        }
    },
    {
        path: '/mySubList',
        name: 'mySubList',
        component: () => import(`@/templates/my/mySubList.vue`),
        meta: {
            title: '错题列表'
        }
    },
    {
        path: '/mySubExercise',
        name: 'mySubExercise',
        component: () => import(`@/templates/my/mySubExercise.vue`),
        meta: {
            title: '错题练习'
        }
    },
    {
        path: '/surveyMore',
        name: 'surveyMore',
        component: () => import(`@/templates/my/surveyMore/surveyMore.vue`),
        redirect: {name: 'surveyMore_totality'},
        children: [
            {
                path: 'totality',
                name: 'surveyMore_totality',
                component: () => import(`@/templates/my/surveyMore/totality.vue`),
                meta: {
                    title: '总体概览'
                }
            },{
                path: 'totality/:cid?',
                name: 'surveyMore_totalityCourse',
                component: () => import(`@/templates/my/surveyMore/totality.vue`),
                meta: {
                    title: '课程数据详情'
                }
            }, {
                path: 'course',
                name: 'surveyMore_course',
                component: () => import(`@/templates/my/surveyMore/course.vue`),
                meta: {
                    title: '课程数据'
                }
            }
        ]
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: () => import(`@/templates/my/signIn.vue`),
        meta: {
            title: '每日签到'
        }
    }
]
