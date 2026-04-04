import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const loadingCount = ref(0)

  const setLoading = (value: boolean) => {
    if (value) {
      loadingCount.value++
      loading.value = true
    } else {
      loadingCount.value--
      if (loadingCount.value <= 0) {
        loadingCount.value = 0
        loading.value = false
      }
    }
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
