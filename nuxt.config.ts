// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@primevue/nuxt-module'
  ],
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          ripple: true,
          inputVariant: 'filled',
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false
        }
      }
    }
  }
});
