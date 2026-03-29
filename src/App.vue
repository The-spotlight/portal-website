<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header />
    
    <main class="flex-1">
      <RouterView />
    </main>
    
    <Footer />
    
    <!-- Global Loading & Error -->
    <LoadingSpinner :loading="appStore.loading" />
    <ErrorMessage :error="appStore.error" @close="appStore.clearError" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>
