import { gsap } from 'gsap'

class Accordion {
  private element: Element
  private trigger: HTMLElement | null
  private panel: HTMLElement | null
  private icon: HTMLElement | null

  constructor(wrap: Element) {
    this.element = wrap
    this.trigger = this.element.querySelector('[data-acc="trigger"]')
    this.panel = this.element.querySelector('[data-acc="panel"]')
    this.icon = this.element.querySelector('[data-acc="icon"]')
  }

  init() {
    this.trigger?.addEventListener('click', () => this.toggle())
  }

  toggle() {
    this.panel?.classList.toggle('opened')
    const isOpen = !this.panel?.classList.contains('opened')

    isOpen ? this.close() : this.open()
  }

  open() {
    gsap
      .timeline()
      .to(this.panel, { height: this.panel?.scrollHeight, duration: 0.2 })
      .to(this.panel, { height: 'auto', duration: 0.2 })
    gsap.to(this.icon, { rotate: '90', duration: 0.2 })
  }

  close() {
    gsap.to(this.panel, { height: 0, duration: 0.2 })
    gsap.to(this.icon, { rotate: 0, duration: 0.2 })
  }
}

export default Accordion
