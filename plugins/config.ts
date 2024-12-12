export default defineNuxtPlugin(() => {
  return {
    provide: {
      config: {
        name: 'Dashboard'
      }
    }
  }
})