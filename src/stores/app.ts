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

  const isDarkMode = ref(false)

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

  const serviceFilter = ref('')

  const setServiceFilter = (filter: string) => {
    serviceFilter.value = filter
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    loading,
    error,
    setLoading,
    setError,
    clearError,
    isDarkMode,
    toggleDarkMode,
    serviceFilter,
    setServiceFilter,
    scrollToTop
  }
})
