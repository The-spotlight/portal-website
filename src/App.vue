<template>
  <div id="app" class="min-h-screen">
    <Layout>
      <Transition name="fade" mode="out-in">
        <Suspense>
          <RouterView />
          <template #fallback>
            <div class="flex justify-center items-center h-64">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          </template>
        </Suspense>
      </Transition>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/components/Layout.vue'
</script>
