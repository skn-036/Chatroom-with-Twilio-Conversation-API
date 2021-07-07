const routes = [
    {
        path : '/',
        component : () => import('../Components/login'),
        name : 'login'
    },

    {
        path : '/home',
        component : () => import('../Components/Home/home'),
        name : 'home.index',
        children : [
            {
                path : 'conversations',
                component : () => import('../Components/Home/conversations'),
                name : 'home.conversations',
            },
            {
                path : 'contacts',
                component : () => import('../Components/Home/contacts'),
                name : 'home.contacts',
            }
        ],
    },

    {
        path : '/conversation/:sid',
        component : () => import('../Components/Conversation/container'),
        name : 'conversation.message.index'
    }
]

export default routes