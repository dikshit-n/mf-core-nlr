// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    // https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
    join(currentDir, './assets/main.css')
  ],
  modules: ['@nuxt/image']
});
