export default [
    {
        path: '/workbench',
        name: 'workbench',
        component: () => import(`@/templates/teacher/workbench`),
        meta: {
            title: '我的工作台'
        }
    },
    {
        path: '/myLesson',
        name: 'myLesson',
        component: () => import(`@/templates/teacher/myLesson`),
        meta: {
            title: '我的课程'
        }
    },
    {
        path: '/repeatAndCall',
        name: 'repeatAndCall',
        component: () => import(`@/templates/teacher/repeatAndCall`),
        meta: {
            title: '我的评论'
        }
    }
]
