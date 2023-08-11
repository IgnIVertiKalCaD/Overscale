<<<<<<< Updated upstream
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // children
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // children
    component: () => import ('../views/admin/AdminView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/ar/auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
=======
import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

const routes = [
  // {
  //   path: '/', //root from LINUX TOP
  //   meta: {
  //     animation: 'fade',
  //   },
  //   component: () => import('@/views/main/MainView.vue'),
  //
  //   children: [
  //
  //   ],
  // },

  {
    path: '',
    name: 'preview',
    meta: {
      animation: 'fade',
    },
    component: () => import('@/views/main/pages/previewPage.vue'),
  },

  {
    path: '/',
    name: 'authRegViewer',
    meta: {
      animation: 'fade',
    },
    // beforeEnter: (to, from) => {
    //     if (store.getters["auth/getStatusAuth"]) {
    //         router.push(from)
    //     }
    // },
    component: () => import('@/views/auth/AuthRegistrationView.vue'),
    children: [
      {
        path: '/auth',
        name: 'auth',
        meta: {
          animation: 'fade',
        },
        component: () => import('@/views/auth/pages/AuthPage.vue'),
      },
      {
        path: '/registration',
        name: 'registration',
        meta: {
          animation: 'fade',
        },
        component: () => import('@/views/auth/pages/RegistrationPage.vue'),
      },
      {
        path: '/reset',
        name: 'resetPassword',
        meta: {
          animation: 'fade',
        },
        component: () => import('@/views/auth/pages/RecoveryPage.vue'),
      },
      {
        path: '/pincode',
        name: 'pincode',
        meta: {
          animation: 'fade',
        },
        component: () => import('@/views/auth/pages/RegisterCodePage.vue'),
      }
    ]
  },

  {
    path: '/',
    meta: {
      // requiresAuth: true,
      animation: 'fade',
    },
    component: () => import('@/views/navigation/navigationView.vue'),
    children: [
      {
        path: '/news',
        name: 'news',
        meta: {
          animation: 'fade',
        },
        component: () => import('@/views/navigation/pages/newsPage.vue'),
      }, {
        path: '/servers',
        name: 'servers',
        meta: {
          animation: 'fade',
        },
        component: () => import('@/views/navigation/pages/serversPage.vue'),
      }, {
        path: '/profile',
        name: 'profile',
        meta: {
          animation: 'fade',
        },
        component: () => import('@/views/navigation/pages/profilePage.vue'),
      },
    ],
  },

  {
    path: '/admin',
    name: 'admin',
    meta: {
      animation: 'fade',
    },
    component: () => import ('@/views/admin/AdminView.vue'),
    children: [],
  },

  //error pages
  {
    path: '/error502',
    name: 'error502',
    meta: {
      title: 'Сайт временно недоступен!',
      description: 'Автоматическое обновление страницы через {{timer}} секунд',
      timer: 30,
      action: 'reload',
    },
    component: () => import('@/views/errorsPages/errorPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    meta: {
      title: 'Страница не найдена!',
      description: 'Автоматическое перенаправление на главную страницу через {{timer}} секунд',
      timer: 5,
      action: 'redirect',
    },
    component: () => import('@/views/errorsPages/errorPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
>>>>>>> Stashed changes

export default router;
