import { emitter } from '../../core/Emitter'
import type { IHeader } from './../../types/modules.types'

class Header implements IHeader {
  mainWrap: HTMLElement | null
  navLinks: NodeListOf<HTMLAnchorElement> | undefined

  constructor(val: string) {
    this.mainWrap = document.querySelector(val)
    this.navLinks = this.mainWrap?.querySelectorAll('a')

    emitter.subscribe('changePage', (pageName: string) => {
      this.toggleMod(pageName)
    })
  }

  toggleMod(val: string) {
    if (!this.mainWrap) return

    const currentModification = this.mainWrap.className
      .split(' ')
      .filter((item) => item.indexOf('--') !== -1)
    if (currentModification.length) {
      this.mainWrap.classList.remove(currentModification[0])
    }

    this.mainWrap.classList.add(`header--${val}`)
    this.searchCurrentPageLink()
  }

  searchCurrentPageLink() {
    if (!this.navLinks) return

    for (const link of this.navLinks) {
      if (location.href.indexOf(link.href) !== -1) {
        link.classList.add('active-link')
      } else {
        link.classList.remove('active-link')
      }
    }
  }
}

export default Header
