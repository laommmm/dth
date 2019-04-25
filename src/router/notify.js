export default [
    {
        path: '/messageNotify',
        name: 'messageNotify',
        component: () => import(`@/templates/notify/messageNotify.vue`),
        meta: {
            title: '消息通知'
        }
    },
    {
        path: '/systemNotify',
        name: 'systemNotify',
        component: () => import(`@/templates/notify/systemNotify.vue`),
        meta: {
            title: '系统通知'
        }
    }
]
