import { emitter } from './../../core/Emitter'

class Burger {
  private wrap: HTMLElement | null
  public state: 'opened' | 'closed'
  private open: HTMLElement | null
  private close: HTMLElement | null
  callback: () => void

  constructor(callback: () => void) {
    this.state = 'closed'
    this.wrap = document.querySelector('[data-burger="wrap"]')
    this.open = null
    this.close = null
    this.callback = callback

    emitter.subscribe('changePage', () => {
      if (this.state === 'opened') {
        this.switchBurger()
      }
    })
  }

  init() {
    if (this.wrap) {
      this.open = this.wrap.querySelector('[data-burger="open"]')
      this.close = this.wrap.querySelector('[data-burger="close"]')

      this.wrap.addEventListener('click', () => {
        this.switchBurger()
        this.callback()
      })
    }
  }

  switchBurger() {
    this.state = this.state === 'opened' ? 'closed' : 'opened'
    if (this.state === 'opened') {
      gsap
        .timeline()
        .to(this.open, { opacity: 0, scale: 0.7, duration: 0.2 })
        .to(this.close, { opacity: 1, scale: 1, duration: 0.2 })
    } else {
      gsap
        .timeline()
        .to(this.close, { opacity: 0, scale: 0.7, duration: 0.2 })
        .to(this.open, { opacity: 1, scale: 1, duration: 0.2 })
    }
  }
}

export default Burger
