export default [
    {
        path: '/myPlan',
        name: 'myPlan',
        component: () => import(`@/templates/plan/myPlan`),
        meta: {
            title: '我的计划'
        }
    }, {
        path: '/addPlan',
        name: 'addPlan',
        component: () => import(`@/templates/plan/addPlan`),
        meta: {
            title: '添加计划'
        }
    }, {
        path: '/setPlan',
        name: 'setPlan',
        component: () => import(`@/templates/plan/setPlan`),
        meta: {
            title: '设置计划'
        }
    }
]