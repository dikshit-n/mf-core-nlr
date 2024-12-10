<template>
  <button class="btn">
    <slot/>
  </button>
</template>

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