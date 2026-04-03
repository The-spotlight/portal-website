<template>
  <main class="flex-1 py-12">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="card text-center py-12">
          <div class="text-8xl font-bold text-primary-600 mb-6">404</div>
          <h1 class="text-4xl font-bold mb-4">页面未找到</h1>
          <p class="text-xl text-gray-600 mb-8">抱歉，您访问的页面不存在</p>
          <RouterLink to="/" class="btn-primary inline-block">
            返回首页
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
