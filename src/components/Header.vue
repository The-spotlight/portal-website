<template>
  <header class="sticky top-0 z-50" :class="{ 'bg-white shadow-sm': !isDarkMode, 'bg-gray-900 shadow-gray-800': isDarkMode }">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" :class="{ 'text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors': !isDarkMode, 'text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors': isDarkMode }">
            门户网站
          </RouterLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :exact="true"
            :class="{ 'text-gray-700 hover:text-primary-600 font-medium transition-colors relative group': !isDarkMode, 'text-gray-300 hover:text-primary-400 font-medium transition-colors relative group': isDarkMode }"
            :active-class="{ 'text-primary-600': !isDarkMode, 'text-primary-400': isDarkMode }"
          >
            {{ item.label }}
            <span :class="[
              { 
                'absolute bottom-0 left-0 h-0.5 transition-all group-hover:w-full': true,
                'bg-primary-600': !isDarkMode,
                'bg-primary-400': isDarkMode
              },
              { 'w-full': $route.path === item.path }
            ]"></span>
          </RouterLink>
        </div>
        
        <div class="flex items-center space-x-4">
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg transition-colors"
            :class="{ 'hover:bg-gray-100': !isDarkMode, 'hover:bg-gray-800': isDarkMode }"
            aria-label="切换暗色模式"
          >
            <svg v-if="!isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg transition-colors"
            :class="{ 'hover:bg-gray-100': !isDarkMode, 'hover:bg-gray-800': isDarkMode }"
            aria-label="切换菜单"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 移动端菜单 -->
      <div
        v-show="mobileMenuOpen"
        :class="{ 'md:hidden py-4 border-t border-gray-200': !isDarkMode, 'md:hidden py-4 border-t border-gray-800': isDarkMode }"
      >
        <div
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-100 translate-y-0': mobileMenuOpen,
            'opacity-0 translate-y-4': !mobileMenuOpen
          }"
        >
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :exact="true"
            :aria-label="item.ariaLabel"
            @click="mobileMenuOpen = false"
            :class="{ 'block py-2 font-medium transition-colors': true, 'text-gray-700 hover:text-primary-600': !isDarkMode, 'text-gray-300 hover:text-primary-400': isDarkMode }"
            :active-class="{ 'text-primary-600': !isDarkMode, 'text-primary-400': isDarkMode }"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const mobileMenuOpen = ref(false)
const appStore = useAppStore()
const isDarkMode = computed(() => appStore.isDarkMode)
const toggleDarkMode = () => appStore.toggleDarkMode()

const navItems = [
  { path: '/', label: '首页', ariaLabel: '前往首页' },
  { path: '/services', label: '服务', ariaLabel: '前往服务页面' },
  { path: '/about', label: '关于我们', ariaLabel: '前往关于我们页面' },
  { path: '/contact', label: '联系我们', ariaLabel: '前往联系我们页面' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  document.title = route.meta.title ? `${route.meta.title} - 门户网站` : '门户网站'
})
</script>
