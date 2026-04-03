<template>
  <div id="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/components/Layout.vue'
</script>
