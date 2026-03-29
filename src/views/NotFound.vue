<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full text-center">
      <div class="text-6xl font-bold text-primary-600 mb-4">404</div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">页面未找到</h1>
      <p class="text-gray-600 mb-8">抱歉，您访问的页面不存在或已被移除。</p>
      <RouterLink to="/" class="btn-primary inline-block">
        返回首页
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
