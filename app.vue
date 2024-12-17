<template>
  <NuxtLayout :routes="routes">
    <template #headerActions>
      Core App
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "pi pi-palette",
    roles: ["admin", "user"]
  },
  {
    label: "Orders",
    path: "/orders",
    icon: "pi pi-home",
    roles: ["admin"]
  },
  {
    label: "Administration",
    icon: "admin-icon",
    roles: ["admin"],
    submenus: [
      {
        label: "Accounts",
        path: "/admin/accounts",
        roles: ["admin"],
        icon: 'pi pi-bookmark'
      },
      {
        label: "Services",
        path: "/admin/services",
        roles: ["admin"],
        icon: 'pi pi-bookmark'
      }
    ]
  }
]
</script>
