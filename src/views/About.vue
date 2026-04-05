<template>
  <main class="flex-1 py-12" :class="{ 'bg-gray-900': appStore.isDarkMode }">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-center" :class="{ 'text-white': appStore.isDarkMode }">关于我们</h1>
        
        <div class="card mb-8" :class="{ 'bg-gray-800 border-gray-700': appStore.isDarkMode }">
          <img
            src="https://picsum.photos/seed/about1/800/400"
            alt="公司简介"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 class="text-2xl font-semibold mb-4" :class="{ 'text-white': appStore.isDarkMode }">公司简介</h2>
          <p class="leading-relaxed mb-4" :class="{ 'text-gray-300': appStore.isDarkMode, 'text-gray-700': !appStore.isDarkMode }">
            我们是一家专注于提供优质服务和解决方案的公司，致力于为客户创造价值。
            凭借多年的行业经验和专业团队，我们为客户提供全方位的服务支持。
          </p>
          <p class="leading-relaxed" :class="{ 'text-gray-300': appStore.isDarkMode, 'text-gray-700': !appStore.isDarkMode }">
            我们的使命是通过创新技术和专业服务，帮助客户实现业务目标，共同成长。
          </p>
        </div>

        <div class="card mb-8" :class="{ 'bg-gray-800 border-gray-700': appStore.isDarkMode }">
          <img
            src="https://picsum.photos/seed/about2/800/400"
            alt="我们的价值观"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 class="text-2xl font-semibold mb-4" :class="{ 'text-white': appStore.isDarkMode }">我们的价值观</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-primary-600 mr-3">✓</span>
              <span :class="{ 'text-gray-300': appStore.isDarkMode, 'text-gray-700': !appStore.isDarkMode }">客户至上：始终以客户需求为中心</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary-600 mr-3">✓</span>
              <span :class="{ 'text-gray-300': appStore.isDarkMode, 'text-gray-700': !appStore.isDarkMode }">追求卓越：不断提升服务质量和专业水平</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary-600 mr-3">✓</span>
              <span :class="{ 'text-gray-300': appStore.isDarkMode, 'text-gray-700': !appStore.isDarkMode }">团队协作：重视团队合作和沟通</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary-600 mr-3">✓</span>
              <span :class="{ 'text-gray-300': appStore.isDarkMode, 'text-gray-700': !appStore.isDarkMode }">持续创新：保持技术和服务的前瞻性</span>
            </li>
          </ul>
        </div>

        <div class="card" :class="{ 'bg-gray-800 border-gray-700': appStore.isDarkMode }">
          <img
            src="https://picsum.photos/seed/about3/800/400"
            alt="联系我们"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 class="text-2xl font-semibold mb-4" :class="{ 'text-white': appStore.isDarkMode }">联系我们</h2>
          <p class="mb-4" :class="{ 'text-gray-300': appStore.isDarkMode, 'text-gray-700': !appStore.isDarkMode }">
            如果您有任何问题或需要帮助，欢迎随时与我们联系。
          </p>
          <RouterLink to="/contact" class="btn-primary inline-block">
            前往联系页面
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAppStore } from '@/stores/app'

// 为 keep-alive 缓存设置组件名称
defineOptions({
  name: 'About'
})

const appStore = useAppStore()
</script>
