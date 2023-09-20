import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import ProfileView from '../views/ProfileView.vue';
import ExerciseView from '../views/ExerciseView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/SearchView.vue'),
    component: SearchView,
  },
  {
    path: '/profile',
    name: 'Profile',
    // component: () => import('../views/ProfileView.vue'),
    component: ProfileView,
  },
  // {
  //   path: '/training/:id',
  //   name: 'Training',
  //   component: () => import('../views/TrainingView.vue'),
  // },
  {
    path: '/exercise/:id',
    name: 'Exercise',
    // component: () => import('../views/ExerciseView.vue'),
    component: ExerciseView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // createWebHistory
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'Search') {
      return savedPosition || { top: 0 };
    }
    return { top: 0 };
  },
});

export default router;
