import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home';
import McvGlobalFeed from '@/views/GlobalFeed';
import McvYourFeed from '@/views/YourFeed';
import McvTagFeed from '@/views/TagFeed';
import Login from '@/views/Login';
import Register from '@/views/Register';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
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
  {
    path: '/',
    name: 'globalFeed',
    component: McvGlobalFeed,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: McvYourFeed,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: McvTagFeed,
  },
  {
    path: '/article/new',
    name: 'createArticle',
    component: McvGlobalFeed,
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: McvGlobalFeed,
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    component: McvGlobalFeed,
  },
  {
    path: '/settings',
    name: 'settings',
    component: McvGlobalFeed,
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: McvGlobalFeed,
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: McvGlobalFeed,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
