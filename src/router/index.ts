import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services.vue'),
    meta: {
      title: '服务'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404 - 页面不存在'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 优化路由标题更新逻辑，确保标题即时生效
router.beforeEach((to, _from, next) => {
  // 优先更新标题，确保导航开始时就更新浏览器标签页标题
  const title = to.meta.title ? `${to.meta.title} - 门户网站` : '门户网站'
  document.title = title
  next()
})

// 监听路由变化，确保标题更新的可靠性
router.afterEach((to) => {
  const title = to.meta.title ? `${to.meta.title} - 门户网站` : '门户网站'
  document.title = title
})

export default router
