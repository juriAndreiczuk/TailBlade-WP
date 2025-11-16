import { defineConfig, type HmrContext, type PluginOption } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import type { PreRenderedAsset } from 'rollup'
import { visualizer } from 'rollup-plugin-visualizer'
import eslint from '@nabla/vite-plugin-eslint'

const TEMPLATE_PATH = 'wp-content/themes/TailBlade-WP'
const rootDir = fileURLToPath(new URL('.', import.meta.url))

const phpHmrPlugin: PluginOption = {
  name: 'php-hmr',
  handleHotUpdate({ file, server }: HmrContext) {
    if (file.endsWith('.php')) {
      server.ws.send({
        type: 'full-reload',
        path: '*'
      })
    }
  }
}

const visualizerPlugin: PluginOption = visualizer({
  filename: 'stats.html',
  open: false,
  gzipSize: true,
  brotliSize: true
}) as unknown as PluginOption

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  plugins: [
    tailwindcss(),
    eslint({
      shouldLint(path) {
        return path.includes('/src/') && /\.(ts|tsx)$/.test(path)
      }
    }),
    phpHmrPlugin,
    visualizerPlugin
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
