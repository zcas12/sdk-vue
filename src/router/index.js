import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/success',
        name: 'success',
        component: () => import('../views/success.vue')
    },
    {
        path: '/fail',
        name: 'fail',
        component: () => import('../views/fail.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue')
    },
    {
        path: '/mobile/payment',
        name: 'mobilePayment',
        component: () => import('../views/mobile/payment.vue')
    },
    {
        path: '/mobile/order',
        name: 'mobileOrder',
        component: () => import('../views/mobile/order.vue')
    },
    {
        path: '/mobile/trans-reg',
        name: 'transReg',
        component: () => import('../views/mobile/transReg.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router