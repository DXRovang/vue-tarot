import {createRouter, createWebHistory} from 'vue-router';
import MajorArcanaView from '../views/MajorArcanaView.vue';

const routes = [

  {
    path: '/majorarcana',
    name: 'MajorArcanaView',
    component: MajorArcanaView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;