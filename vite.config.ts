import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [wasm(), react(), tsconfigPaths()],
  resolve: {
    alias: {
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      process: require.resolve('process/browser'),
      stream: require.resolve('stream-browserify')
    }
  },
  server: {
    open: true,
    host: true,
    proxy: {
      '/api/v1': {
        target: '',
        changeOrigin: true
      }
    }
  }
})
