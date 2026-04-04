<template>
  <main class="flex-1 py-12">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-12 text-center">联系我们</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="card">
            <h2 class="text-2xl font-semibold mb-4">联系方式</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <span class="text-primary-600 mr-3 text-xl">📧</span>
                <div>
                  <p class="font-medium">邮箱</p>
                  <p class="text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-primary-600 mr-3 text-xl">📞</span>
                <div>
                  <p class="font-medium">电话</p>
                  <p class="text-gray-600">+86 123 4567 8900</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-primary-600 mr-3 text-xl">📍</span>
                <div>
                  <p class="font-medium">地址</p>
                  <p class="text-gray-600">中国北京市</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <h2 class="text-2xl font-semibold mb-4">工作时间</h2>
            <div class="space-y-2 text-gray-700">
              <p>周一至周五: 9:00 - 18:00</p>
              <p>周六: 10:00 - 16:00</p>
              <p>周日: 休息</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-2xl font-semibold mb-6">发送消息</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                姓名 *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border rounded-lg transition-all"
                :class="errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'"
                placeholder="请输入您的姓名"
                @blur="validateField('name')"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                邮箱 *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border rounded-lg transition-all"
                :class="errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'"
                placeholder="请输入您的邮箱"
                @blur="validateField('email')"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                消息 *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-2 border rounded-lg transition-all"
                :class="errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'"
                placeholder="请输入您的消息"
                @blur="validateField('message')"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              :disabled="submitting || !isFormValid"
              class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ submitting ? '发送中...' : '发送消息' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/app'
import api from '@/utils/api'

const appStore = useAppStore()
const submitting = ref(false)

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateField = (field: keyof typeof form.value) => {
  switch (field) {
    case 'name':
      errors.value.name = form.value.name.trim() ? '' : '请输入您的姓名'
      break
    case 'email':
      if (!form.value.email.trim()) {
        errors.value.email = '请输入您的邮箱'
      } else if (!emailRegex.test(form.value.email)) {
        errors.value.email = '请输入有效的邮箱地址'
      } else {
        errors.value.email = ''
      }
      break
    case 'message':
      errors.value.message = form.value.message.trim() ? '' : '请输入您的消息'
      break
  }
}

const validateForm = () => {
  let isValid = true
  
  Object.keys(form.value).forEach(field => {
    validateField(field as keyof typeof form.value)
    if (errors.value[field as keyof typeof errors.value]) {
      isValid = false
    }
  })
  
  return isValid
}

const isFormValid = computed(() => {
  return !errors.value.name && !errors.value.email && !errors.value.message
})

const resetForm = () => {
  form.value = { name: '', email: '', message: '' }
  errors.value = { name: '', email: '', message: '' }
  appStore.clearError()
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }
  
  submitting.value = true
  appStore.setLoading(true)
  try {
    await api.post('/contact', form.value)
    alert('消息发送成功！我们会尽快回复您。')
    resetForm()
  } catch (error) {
    console.error('发送失败:', error)
    appStore.setError('发送失败，请稍后重试')
  } finally {
    submitting.value = false
    appStore.setLoading(false)
  }
}

onUnmounted(() => {
  resetForm()
})
</script>
