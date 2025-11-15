import { defineConfig, type HmrContext } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import type { PreRenderedAsset } from 'rollup'
// @ts-expect-error: vite-plugin-eslint
import eslint from 'vite-plugin-eslint'

const TEMPLATE_PATH = 'wp-content/themes/TailBlade-WP'
const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  plugins: [
    eslint({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['node_modules']
    }),
    {
      handleHotUpdate({ file, server }: HmrContext) {
        if (file.endsWith('.php')) {
          server.ws.send({
            type: 'full-reload',
            path: '*'
          })
        }
      }
    }
  ],
  resolve: {
    alias: [
      {
        find: '@/src',
        replacement:
          process.env.NODE_ENV === 'development'
            ? resolve(rootDir, `${TEMPLATE_PATH}/src/`)
            : resolve(rootDir, 'src/')
      }
    ]
  },
  base:
    process.env.NODE_ENV === 'development' ? '/' : `/${TEMPLATE_PATH}/dist/`,
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'src/scripts/main.ts')
      },
      output: {
        assetFileNames: (assetInfo: PreRenderedAsset) => {
          const extType = assetInfo.name?.split('.').at(1)
          if (extType && /png|jpe?g|svg|gif|tiff|webp|bmp|ico/i.test(extType)) {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    cors: {
      origin: '*'
    }
  }
})
