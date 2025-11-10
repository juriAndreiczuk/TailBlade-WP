import type { IFooter } from './../../types/modules.types'

class Footer implements IFooter {
  mainWrap: HTMLElement | null

  constructor(val: string) {
    this.mainWrap = document.querySelector(val)
  }

  hideAnimation() {
    gsap.timeline().to(this.mainWrap, { opacity: 0 })
  }

  showAnimation() {
    gsap.timeline().to(this.mainWrap, { opacity: 1 })
  }
}

export default Footer
