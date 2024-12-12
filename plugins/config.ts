export default defineNuxtPlugin(() => {
  return {
    provide: {
      moduleConfig: {
        name: 'Dashboard'
      }
    }
  }
})