<template>
  <div class="py-20">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="card text-center">
          <h1 class="text-6xl font-bold mb-6">404</h1>
          <h2 class="text-3xl font-semibold mb-8">页面不存在</h2>
          <p class="text-xl text-gray-600 mb-12">抱歉，您访问的页面不存在或已被删除。</p>
          <RouterLink to="/" class="btn-primary">
            返回首页
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>