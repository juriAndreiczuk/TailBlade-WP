import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

declare global {
  interface Window {
    ScrollTrigger: typeof ScrollTrigger
    gsap: typeof gsap
  }
}

interface ImportMetaEnv {
  readonly VITE_DEV_SERVER_URL?: string
  readonly VITE_ENVIRONMENT_TYPE?: 'dev' | 'production'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
