import { changeActive } from '../../core/utils'

class FlexTabs {
  private wrap: Element
  private btns: NodeListOf<HTMLElement>
  private tabs: NodeListOf<HTMLElement>
  private container: HTMLElement | null
  private containerHeight: number
  public activeIndex: number

  constructor(wrap: Element) {
    this.wrap = wrap
    this.btns = this.wrap.querySelectorAll('[data-tabs="btn"]')
    this.tabs = this.wrap.querySelectorAll('[data-tabs="tab"]')
    this.container = this.wrap.querySelector('[data-tabs="container"]')
    this.containerHeight = 0
    this.activeIndex = 0
  }

  init() {
    changeActive(this.btns, 0, {
      active: ['bg-black', 'text-white'],
      normal: ['bg-white', 'text-black']
    })

    gsap.set(this.tabs, { display: 'none' })
    gsap.set(this.tabs[0], { display: 'block' })
    this.btns.forEach((btn, n) =>
      btn.addEventListener('click', () => {
        this.changeTab(n)
      })
    )
  }

  private changeTab(n: number) {
    if (this.activeIndex !== n && this.container) {
      this.activeIndex = n
      changeActive(this.btns, this.activeIndex, {
        active: ['bg-black', 'text-white'],
        normal: ['bg-white', 'text-black']
      })

      this.containerHeight = this.container.offsetHeight
      gsap
        .timeline()
        .to(this.container, { height: this.containerHeight, duration: 0.15 })
        .to(this.tabs, { display: 'none', opacity: 0, duration: 0.15 })
        .to(this.tabs[this.activeIndex], { display: 'block', duration: 0.15 })
        .to(this.container, { height: 'auto', duration: 0.15 })
        .to(this.tabs[this.activeIndex], { opacity: 1, duration: 0.15 })
      this.containerHeight = this.container.offsetHeight
    }
  }
}

export default FlexTabs
