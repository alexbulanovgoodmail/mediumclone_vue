import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home';
import McvGlobalFeed from '@/views/GlobalFeed';
import Login from '@/views/Login';
import Register from '@/views/Register';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'globalFeed',
    component: McvGlobalFeed,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
