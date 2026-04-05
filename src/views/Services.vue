<template>
  <main class="flex-1 py-12" :class="{ 'bg-white': !isDarkMode, 'bg-gray-900': isDarkMode }">
    <div class="container-custom">
      <h1 :class="{ 'text-4xl font-bold mb-12 text-center text-gray-900': !isDarkMode, 'text-4xl font-bold mb-12 text-center text-white': isDarkMode }">我们的服务</h1>
      
      <div class="mb-8">
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="{ '搜索服务...': !isDarkMode, '搜索服务...': isDarkMode }"
          :class="{ 'w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all border-gray-300': !isDarkMode, 'w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all border-gray-700 bg-gray-800 text-white': isDarkMode }"
        />
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(service, index) in filteredServices"
          :key="index"
          :class="{ 'card bg-white shadow-md': !isDarkMode, 'card bg-gray-800 shadow-gray-700': isDarkMode }"
        >
          <img
            :src="service.image"
            :alt="service.title"
            loading="lazy"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div class="flex items-start mb-4">
            <div :class="{ 'w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4': !isDarkMode, 'w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mr-4': isDarkMode }">
              <span class="text-2xl">{{ service.icon }}</span>
            </div>
            <div class="flex-1">
              <h2 :class="{ 'text-2xl font-semibold mb-2 text-gray-900': !isDarkMode, 'text-2xl font-semibold mb-2 text-white': isDarkMode }">{{ service.title }}</h2>
              <p :class="{ 'text-gray-600 mb-4': !isDarkMode, 'text-gray-300 mb-4': isDarkMode }">{{ service.description }}</p>
              <ul class="space-y-2">
                <li
                  v-for="(feature, idx) in service.features"
                  :key="idx"
                  :class="{ 'flex items-start text-sm text-gray-700': !isDarkMode, 'flex items-start text-sm text-gray-300': isDarkMode }"
                >
                  <span :class="{ 'text-primary-600 mr-2': !isDarkMode, 'text-primary-400 mr-2': isDarkMode }">•</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const isDarkMode = computed(() => appStore.isDarkMode)
const searchQuery = computed({
  get: () => appStore.searchFilter,
  set: (value) => appStore.setSearchFilter(value)
})

const services = [
  {
    icon: '💻',
    title: 'Web 开发',
    description: '专业的网站和应用开发服务',
    image: 'https://picsum.photos/seed/svc1/400/300',
    features: [
      '响应式设计',
      '现代化技术栈',
      '性能优化',
      'SEO 优化'
    ]
  },
  {
    icon: '📱',
    title: '移动应用',
    description: 'iOS 和 Android 应用开发',
    image: 'https://picsum.photos/seed/svc2/400/300',
    features: [
      '原生应用开发',
      '跨平台解决方案',
      '应用商店发布',
      '持续维护更新'
    ]
  },
  {
    icon: '☁️',
    title: '云服务',
    description: '云端部署和运维服务',
    image: 'https://picsum.photos/seed/svc3/400/300',
    features: [
      '云服务器部署',
      '容器化方案',
      '自动化运维',
      '监控和告警'
    ]
  },
  {
    icon: '🎨',
    title: 'UI/UX 设计',
    description: '现代化的用户界面设计',
    image: 'https://picsum.photos/seed/svc4/400/300',
    features: [
      '用户体验设计',
      '视觉设计',
      '交互原型',
      '设计规范制定'
    ]
  }
]

const filteredServices = computed(() => {
  if (!searchQuery.value) {
    return services
  }
  const query = searchQuery.value.toLowerCase()
  return services.filter(service => 
    service.title.toLowerCase().includes(query) ||
    service.description.toLowerCase().includes(query) ||
    service.features.some(feature => feature.toLowerCase().includes(query))
  )
})
</script>
