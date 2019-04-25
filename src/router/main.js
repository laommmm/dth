export default [
    // {
    //     path: '/',
    //     name: 'mainCont',
    //     component: () => import(`@/templates/main/mainCont.vue`),
    //     redirect:{name:'home'},
    //     children:[
    //
    //     ]
    // },
    {
        path: '/home',
        name: 'home',
        component: () => import(`@/templates/main/home.vue`),
        meta: {
            title: '首页',
            keepAlive: true
        }
    },
    {
        path: '/break',
        name: 'break',
        component: () => import(`@/templates/main/break.vue`),
        meta: {
            title: '我的课堂',
            keepAlive: true
        }
    },
    {
        path: '/me',
        name: 'me',
        component: () => import(`@/templates/main/me.vue`),
        meta: {
            title: '我的',
            keepAlive: true
        }
    },
    {
        path: '/lesson/:cid?',
        name: 'lesson',
        component: () => import(`@/templates/main/lesson.vue`),
        meta:{
            title: '课程详情'
        }
    }
]
