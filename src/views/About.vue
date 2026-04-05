<template>
  <main class="flex-1 py-12" :class="{ 'bg-white': !isDarkMode, 'bg-gray-900': isDarkMode }">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <h1 :class="{ 'text-4xl font-bold mb-8 text-center text-gray-900': !isDarkMode, 'text-4xl font-bold mb-8 text-center text-white': isDarkMode }">关于我们</h1>
        
        <div :class="{ 'card mb-8 bg-white shadow-md': !isDarkMode, 'card mb-8 bg-gray-800 shadow-gray-700': isDarkMode }">
          <img
            src="https://picsum.photos/seed/about1/800/400"
            alt="公司简介"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 :class="{ 'text-2xl font-semibold mb-4 text-gray-900': !isDarkMode, 'text-2xl font-semibold mb-4 text-white': isDarkMode }">公司简介</h2>
          <p :class="{ 'text-gray-700 leading-relaxed mb-4': !isDarkMode, 'text-gray-300 leading-relaxed mb-4': isDarkMode }">
            我们是一家专注于提供优质服务和解决方案的公司，致力于为客户创造价值。
            凭借多年的行业经验和专业团队，我们为客户提供全方位的服务支持。
          </p>
          <p :class="{ 'text-gray-700 leading-relaxed': !isDarkMode, 'text-gray-300 leading-relaxed': isDarkMode }">
            我们的使命是通过创新技术和专业服务，帮助客户实现业务目标，共同成长。
          </p>
        </div>

        <div :class="{ 'card mb-8 bg-white shadow-md': !isDarkMode, 'card mb-8 bg-gray-800 shadow-gray-700': isDarkMode }">
          <img
            src="https://picsum.photos/seed/about2/800/400"
            alt="我们的价值观"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 :class="{ 'text-2xl font-semibold mb-4 text-gray-900': !isDarkMode, 'text-2xl font-semibold mb-4 text-white': isDarkMode }">我们的价值观</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span :class="{ 'text-primary-600 mr-3': !isDarkMode, 'text-primary-400 mr-3': isDarkMode }">✓</span>
              <span :class="{ 'text-gray-700': !isDarkMode, 'text-gray-300': isDarkMode }">客户至上：始终以客户需求为中心</span>
            </li>
            <li class="flex items-start">
              <span :class="{ 'text-primary-600 mr-3': !isDarkMode, 'text-primary-400 mr-3': isDarkMode }">✓</span>
              <span :class="{ 'text-gray-700': !isDarkMode, 'text-gray-300': isDarkMode }">追求卓越：不断提升服务质量和专业水平</span>
            </li>
            <li class="flex items-start">
              <span :class="{ 'text-primary-600 mr-3': !isDarkMode, 'text-primary-400 mr-3': isDarkMode }">✓</span>
              <span :class="{ 'text-gray-700': !isDarkMode, 'text-gray-300': isDarkMode }">团队协作：重视团队合作和沟通</span>
            </li>
            <li class="flex items-start">
              <span :class="{ 'text-primary-600 mr-3': !isDarkMode, 'text-primary-400 mr-3': isDarkMode }">✓</span>
              <span :class="{ 'text-gray-700': !isDarkMode, 'text-gray-300': isDarkMode }">持续创新：保持技术和服务的前瞻性</span>
            </li>
          </ul>
        </div>

        <div :class="{ 'card bg-white shadow-md': !isDarkMode, 'card bg-gray-800 shadow-gray-700': isDarkMode }">
          <img
            src="https://picsum.photos/seed/about3/800/400"
            alt="联系我们"
            loading="lazy"
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 :class="{ 'text-2xl font-semibold mb-4 text-gray-900': !isDarkMode, 'text-2xl font-semibold mb-4 text-white': isDarkMode }">联系我们</h2>
          <p :class="{ 'text-gray-700 mb-4': !isDarkMode, 'text-gray-300 mb-4': isDarkMode }">
            如果您有任何问题或需要帮助，欢迎随时与我们联系。
          </p>
          <RouterLink :class="{ 'btn-primary inline-block': !isDarkMode, 'btn-primary inline-block bg-primary-600 hover:bg-primary-700': isDarkMode }" to="/contact">
            前往联系页面
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const isDarkMode = computed(() => appStore.isDarkMode)
</script>
