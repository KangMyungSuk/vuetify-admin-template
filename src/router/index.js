import Vue from 'vue';
import VueRouter from 'vue-router';
import Boardsystem from '@/views/BoardSystem.vue';
import Gridsystem from '@/views/GridSystem.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Boardsystem',
        component: Boardsystem,
    },
    {
        path: '/grid-system',
        name: 'Gridsystem',
        component: Gridsystem,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
