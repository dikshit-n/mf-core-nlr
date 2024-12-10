<template>
  <header>Base Layout</header>
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
    <main><slot/></main>
  </div>
  <footer>Footer</footer>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
  withDefaults(defineProps<{ routes: { name: string, to: string }[] }>(), {
    routes: [] as any
  })
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  flex: 200px auto;
}
</style>
