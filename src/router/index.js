import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue'
import BlogPage from '../components/Blog.vue'
import Lab2_bai1 from '../components/lab2_bai1.vue';
import Lab2_bai234 from '../components/lab2_bai234.vue';
import Lab3_bai12 from '@/components/lab3_bai12.vue';
import Lab3_bai4 from '@/components/lab3_bai4.vue';
import Lab3_bai3 from '@/components/lab3_bai3.vue';



const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: About },
    { path: '/lab2bai1', component: Lab2_bai1},
    { path: '/lab2bai234', component: Lab2_bai234},
    { path : '/lab3bai12', component: Lab3_bai12},
    { path : '/lab3bai3', component: Lab3_bai3},
    { path : '/lab3bai4', component: Lab3_bai4}


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
