<template>
  <main class="py-12">
    <div class="container-custom">
      <div class="max-w-2xl mx-auto text-center">
        <div class="text-8xl font-bold text-primary-600 mb-4">404</div>
        <h1 class="text-4xl font-bold mb-4">页面未找到</h1>
        <p class="text-gray-600 mb-8">抱歉，您访问的页面不存在或已被删除。</p>
        <RouterLink to="/" class="btn-primary inline-block">返回首页</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
