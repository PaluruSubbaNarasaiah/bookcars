import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }

  return defineConfig({
    plugins: [
      react({
        babel: {
          plugins: [
            ['@babel/plugin-transform-runtime'],
            // You can re-enable this if needed
            // ['babel-plugin-react-compiler', { optimize: true }],
          ],
        },
      }),
      createHtmlPlugin({
        inject: {
          data: {
            WEBSITE_NAME: process.env.VITE_BC_WEBSITE_NAME || 'BookCars',
          },
        },
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        ':bookcars-types': path.resolve(__dirname, '../packages/bookcars-types'),
        ':bookcars-helper': path.resolve(__dirname, '../packages/bookcars-helper'),
        ':disable-react-devtools': path.resolve(__dirname, '../packages/disable-react-devtools'),
        ':currency-converter': path.resolve(__dirname, '../packages/currency-converter'),
        ':reactjs-social-login': path.resolve(__dirname, '../packages/reactjs-social-login'),// ✅ Correct import path
      },
    },

    server: {
      host: '0.0.0.0',
      port: Number.parseInt(process.env.VITE_PORT || '3002', 10),
    },

    build: {
      outDir: 'build',
      target: 'esnext',
      modulePreload: true,
      sourcemap: false,
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          dead_code: true,
          passes: 3,
          unsafe_math: true,
          conditionals: true,
          sequences: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
        },
        format: {
          comments: false,
        },
        mangle: {
          properties: false,
        },
      },
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'chunks/[name]-[hash].js',
          entryFileNames: 'entries/[name]-[hash].js',
        },
      },
      assetsInlineLimit: 8192,
    },
  })
}
