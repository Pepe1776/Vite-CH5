<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)
const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>
<template>
  <h1 class="text-15xl bl2 mt-70">
    Aevio
  </h1>
  <h2 class="text-6xl bl2">
    HTML 5
  </h2>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
