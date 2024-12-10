<template>
  <div class="content">
    <div class="sidebar">
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
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
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
  gap: 10px;
  background-color: lightgray;
}
.right {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
