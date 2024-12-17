import { defineNuxtPlugin } from '#app';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

export default defineNuxtPlugin((nuxtApp) => {
  // Register the Toast service globally
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component('Toast', Toast); // Register the Toast component
});
