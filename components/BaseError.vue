<template>
  <template #error="{ error }">
    <div>{{ error.statusCode }}</div>
    <div>{{ error.message }}</div>
  </template>
</template>