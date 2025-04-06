import {
  createRouter,
  createWebHistory
} from 'vue-router';

import Home from '../routes/Home.vue';
import Contact from '../routes/Contact.vue';
import Add from '../routes/Add.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/contact/:id',
      component: Contact
    },
    {
      path: '/add',
      component: Add
    }
  ]
});

export default router