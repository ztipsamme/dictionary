import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/JS-with-framework' : '/', //Allows subfolders on GitHub
  plugins: [vue()],
})
