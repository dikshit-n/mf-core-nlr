<template>
  <div class="container">
    <div class="sidebar">
      <NuxtImg src="/img/app-logo.png" class="app-logo" />
      <nav class="route-list">
        <NuxtLink :to="route.to" v-for="route in routes" :key="route.name">
          <p>{{ route.name }}</p>
          <i class="pi pi-angle-right"></i>
        </NuxtLink>
      </nav>
    </div>
    <div class="right">
      <header>
        <h3>
          <slot name="header"></slot>
        </h3>
      </header>
      <main><slot/></main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// import all the css related to the layout here
// this will be extended to extending layers
import '@/assets/css/base.css'
import { withDefaults, defineProps } from 'vue';
  withDefaults(defineProps<{ routes?: { name: string, to: string }[] }>(), {
    routes: [] as any
  })
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex: 200px auto;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  .sidebar {
    padding: 5px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .app-logo {
      height: 35px;
      background-color: lightgray;
    }
    .route-list {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
      a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        list-style: none;
        text-decoration: none;
        p {
          margin: 0;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    header {
      background-color: lightgray;
      padding: 0 10px;
      border: 2px solid black;
    }
    main {
      padding: 10px;
    }
  }
}
</style>
