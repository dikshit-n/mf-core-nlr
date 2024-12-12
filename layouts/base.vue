<template>
  <NuxtErrorBoundary>
    <div class="content">
      <div class="sidebar" style="background-color: lightgray; height: 100%; margin-top: 10px;">
        <h1>HealPros</h1>
        <ul>
          <li v-for="route in routes" :key="route.name">
            <NuxtLink :to="route.to">
              {{ route.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="right">
        <header style="width: 100%; border-bottom: 1px solid gray;">
          <h1>Layout</h1>
        </header>
        <main><slot/></main>
        <footer>Footer</footer>
      </div>
    </div>
    <template #error="{ error }">
      <div>
        {{ error.statusCode }}
      </div>
      <div>
        {{ error.message }}
      </div>
    </template>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import { v4 } from 'uuid';
console.log(v4(), '----uuid form mf-core')
  withDefaults(defineProps<{ routes: { name: string, to: string }[] }>(), {
    routes: [
      { name: 'Home', to: '/' },
      { name: 'Remote 1', to: '/remote1' },
      { name: 'Remote 2', to: '/remote2' },
    ] as any
  })
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  flex: 200px auto;
  gap: 20px;
  height: 100vh;
}
.right {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
