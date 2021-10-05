import {createRouter, createWebHistory} from 'vue-router';
import Profile from './Profile.vue'
import Login from './Login.vue'
import Transactions from './Transactions.vue'
import Home from './Home.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: Home,
      },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/user/profile',
      component: Profile,
    },
    {
      path: '/transactions',
      component: Transactions,
    },
  ],
});