export default [
    {
        path: '/course',
        name: 'course',
        component:()=>import(`@/templates/course/mainCont.vue`),
        redirect:{name:'course_play'},
        children:[
            {
                path: 'play/:lid?',
                name: 'course_play',
                component: () => import(`@/templates/course/play.vue`),
                meta:{
                    title:'课程播放'
                }
            },{
                path: 'manuscripts/:lid?',
                name: 'course_manuscripts',
                component: () => import(`@/templates/course/manuscripts.vue`),
                meta:{
                    title:'文稿'
                }
            },{
                path: 'message/:lid?',
                name: 'course_message',
                component: () => import(`@/templates/course/message.vue`),
                meta:{
                    title:'全部说说'
                }
            },{
                path: 'message/info/:id?',
                name: 'course_messageInfo',
                component: () => import(`@/templates/course/messageInfo.vue`),
                meta:{
                    title:'说说详情'
                }
            },{
                path: 'note/:lid?/:title?',
                name: 'course_note',
                component: () => import(`@/templates/course/note.vue`),
                meta:{
                    title:'记笔记'
                }
            },{
                path: 'noteEdit/:id?/:title?',
                name: 'course_noteEdit',
                component: () => import(`@/templates/course/note.vue`),
                meta:{
                    title:'编辑笔记'
                }
            },{
                path: 'exercises/:lid?',
                name: 'course_exercises',
                component: () => import(`@/templates/course/exercises.vue`),
                meta:{
                    title:'课间习题'
                }
            },{
                path: 'exercisesResult/:aid?/:lid?',
                name: 'course_exercisesResult',
                component: () => import(`@/templates/course/exercises_result.vue`),
                meta:{
                    title:'答题结果'
                }
            }
        ]
    }
]