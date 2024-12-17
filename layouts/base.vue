<template>
  <div class="container">
    <div class="sidebar">
      <NuxtImg src="/img/app-logo.png" class="app-logo" />
      <nav class="route-list">
        <template v-for="route in routes" :key="route.path">
          <Button v-if="!route.submenus?.length" as="router-link" severity="secondary" variant="text"
            :label="route.label" :to="route.path" />
          <div v-else>
            <Button severity="secondary" variant="text" :label="route.label" />
            <template v-for="submenu in route.submenus" :key="submenu.path">
              <Button as="router-link" severity="secondary" variant="text" :label="submenu.label" :to="submenu.path" />
            </template>
          </div>
        </template>
      </nav>
    </div>
    <div class="right">
      <header>
        <h1>
          <slot name="title" />
        </h1>
        <slot name="headerActions"></slot>
      </header>
      <main>
        <slot />
      </main>
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

import { defineProps } from 'vue';
import type { Route } from '~/types/route';
defineProps<{ routes?: Route[] }>()
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
    flex: 1;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      background-color: lightgray;
      border: 2px solid black;

      h1 {
        margin: 0;
        font-weight: 400;
      }
    }

    main {
      padding: 10px;
      flex: auto;
      overflow: auto;
    }
  }
}
</style>
