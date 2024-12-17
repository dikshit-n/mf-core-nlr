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
    "label": "Dashboard",
    "path": "/dashboard",
    "icon": "dashboard-icon",
    "roles": ["admin", "user"],
    "submenus": []
  },
  {
    "label": "Orders",
    "path": "/orders",
    "icon": "orders-icon",
    "roles": ["admin"],
    "submenus": []
  },
  {
    "label": "Administration",
    "path": "/admin",
    "icon": "admin-icon",
    "roles": ["admin"],
    "submenus": [
      {
        "label": "Accounts",
        "path": "/admin/accounts",
        "roles": ["admin"]
      }
    ]
  }
]
</script>
