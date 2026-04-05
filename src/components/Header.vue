<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            门户网站
          </RouterLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
            active-class="text-primary-600"
          >
            {{ item.label }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
          </RouterLink>
        </div>
        
        <div class="flex items-center space-x-4">
          <button
            @click="appStore.toggleDarkMode"
            class="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="切换暗色模式"
          >
            <svg v-if="appStore.isDarkMode" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.34 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          
          <button
            ref="mobileMenuButton"
            @click="toggleMobileMenu"
            class="md:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="切换菜单"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 移动端菜单遮罩 -->
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="closeMobileMenu"
        aria-hidden="true"
      ></div>
      
      <!-- 移动端菜单 -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-200 relative z-50 bg-white"
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
            :aria-label="item.ariaLabel"
            @click="closeMobileMenu"
            class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const route = useRoute()
const mobileMenuOpen = ref(false)
const mobileMenuButton = ref<HTMLButtonElement | null>(null)

const navItems = [
  { path: '/', label: '首页', ariaLabel: '前往首页' },
  { path: '/services', label: '服务', ariaLabel: '前往服务页面' },
  { path: '/about', label: '关于我们', ariaLabel: '前往关于我们页面' },
  { path: '/contact', label: '联系我们', ariaLabel: '前往联系我们页面' }
]

const toggleMobileMenu = () => {
  if (mobileMenuOpen.value) {
    closeMobileMenu()
  } else {
    mobileMenuOpen.value = true
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  if (mobileMenuButton.value) {
    mobileMenuButton.value.focus()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.title = route.meta.title ? `${route.meta.title} - 门户网站` : '门户网站'
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
