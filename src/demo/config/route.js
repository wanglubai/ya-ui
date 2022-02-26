import menu from '../menu-list.vue'
export default [

    {
        path: '/loading',
        name: 'loading',
        meta: {
            title: 'loading',
            type: "Base组件"
        },
        component: () => import('../page-loading')
    },
    {
        path: '/button',
        name: 'button',
        meta: {
            title: 'button',
            type: "Base组件"
        },
        component: () => import('../page-button.vue')
    },
    {
        path: '/popup',
        name: 'popup',
        meta: {
            title: 'popup',
            type: "Base组件"
        },
        component: () => import('../page-popup.vue')
    },
    {
        path: '/tab-bar',
        name: 'tab-bar',
        meta: {
            title: 'tab-bar',
            type: "Base组件"
        },
        component: () => import('../page-tab-bar.vue')
    }, {
        path: '/switch',
        name: 'switch',
        meta: {
            title: 'switch',
            type: "From组件"
        },
        component: () => import('../page-switch.vue')
    },
    {
        path: '/checkbox',
        name: 'checkbox',
        meta: {
            title: 'checkbox',
            type: "From组件"
        },
        component: () => import('../page-checkbox.vue')
    },
    {
        path: '/radio',
        name: 'radio',
        meta: {
            title: 'radio',
            type: "From组件"
        },
        component: () => import('../page-radio.vue')
    },
    {
        path: '/textarea',
        name: 'textarea',
        meta: {
            title: 'textarea',
            type: "From组件"
        },
        component: () => import('../page-textarea.vue')
    },
    {
        path: '/scroll',
        name: 'scroll',
        meta: {
            title: 'scroll',
            type: "Effect组件"
        },
        component: () => import('../page-scroll.vue')
    },
    {
        path: '/image-preview',
        name: 'image-preview',
        meta: {
            title: 'image-preview',
            type: "Effect组件"
        },
        component: () => import('../page-image-preview.vue')
    },
    {
        path: '/slide',
        name: 'slide',
        meta: {
            title: 'slide',
            type: "Effect组件"
        },
        component: () => import('../page-slide.vue')
    },
    {
        path: '/picker',
        name: 'picker',
        meta: {
            title: 'picker',
            type: "Effect组件"
        },
        component: () => import('../page-picker.vue')
    },
    {
        path: '/rate',
        name: 'rate',
        meta: {
            title: 'rate',
            type: "Effect组件"
        },
        component: () => import('../page-rate.vue')
    },
    {
        path: '/tab-panel',
        name: 'tab-panel',
        meta: {
            title: 'tab-panel',
            type: "Effect组件"
        },
        component: () => import('../page-tab-panel.vue')
    },
    {
        path: '/sticky',
        name: 'sticky',
        meta: {
            title: 'sticky',
            type: "Effect组件"
        },
        component: () => import('../sticky/sticky.vue')
    },
    {
        path: '/action-sheet',
        name: 'action-sheet',
        meta: {
            title: 'action-sheet',
            type: "Effect组件"
        },
        component: () => import('../page-action-sheet.vue')
    },
    {
        path: '/*',
        name: '*',
        component: menu
    }
]
