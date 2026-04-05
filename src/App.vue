<template>
  <div id="app" class="min-h-screen">
    <Layout>
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          @enter="onEnter"
          @leave="onLeave"
        >
          <Suspense>
            <KeepAlive :include="['services', 'about']">
              <component :is="Component" />
            </KeepAlive>
            <template #fallback>
              <div class="flex items-center justify-center py-20">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            </template>
          </Suspense>
        </Transition>
      </RouterView>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/components/Layout.vue'

const onEnter = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  element.style.opacity = '0'
  element.style.transition = 'opacity 300ms ease'
  requestAnimationFrame(() => {
    element.style.opacity = '1'
  })
  const handleTransitionEnd = () => {
    element.removeEventListener('transitionend', handleTransitionEnd)
    done()
  }
  element.addEventListener('transitionend', handleTransitionEnd)
}

const onLeave = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  element.style.opacity = '1'
  element.style.transition = 'opacity 300ms ease'
  requestAnimationFrame(() => {
    element.style.opacity = '0'
  })
  const handleTransitionEnd = () => {
    element.removeEventListener('transitionend', handleTransitionEnd)
    done()
  }
  element.addEventListener('transitionend', handleTransitionEnd)
}
</script>
