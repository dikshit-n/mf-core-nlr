<template>
  <NuxtLayout :routes="routes">
    <template #header>
      Core App
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
  const routes = [
    { name: 'Home', to: '/' },
    { name: 'Remote 1', to: '/remote1' },
    { name: 'Remote 2', to: '/remote2' }
  ]
</script>
