<template>
  <Button v-bind="props" />
</template>
<script setup>
import Button from 'primevue/button';
</script>
<style scoped>
  .btn {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: coral;
    color: white;
  }
</style>