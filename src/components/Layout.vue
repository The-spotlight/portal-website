<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <slot></slot>
    </main>
    <Footer />
    <LoadingSpinner :loading="appStore.loading" />
    <ErrorMessage :error="appStore.error" @close="appStore.clearError" />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorMessage from './ErrorMessage.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>