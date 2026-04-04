import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const loadingCount = ref(0)
  const error = ref<string | null>(null)

  const loading = ref(false)

  const setLoading = (value: boolean) => {
    if (value) {
      loadingCount.value++
    } else {
      loadingCount.value = Math.max(0, loadingCount.value - 1)
    }
    loading.value = loadingCount.value > 0
  }

  const setError = (message: string | null) => {
    error.value = message
  }

  const clearError = () => {
    error.value = null
  }

  return {
    loading,
    error,
    setLoading,
    setError,
    clearError
  }
})
