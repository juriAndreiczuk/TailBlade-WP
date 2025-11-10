import { gsap } from 'gsap'

class Popup {
  private wrap: Element
  private trigger: HTMLElement | null
  private overlay: HTMLElement | null
  private panel: HTMLElement | null
  private closeButton: HTMLElement | null
  private backdrop: HTMLElement | null
  public isOpen: boolean

  constructor(wrap: Element) {
    this.wrap = wrap
    this.trigger = this.wrap.querySelector('[data-popup="trigger"]')
    this.overlay = this.wrap.querySelector('[data-popup="overlay"]')
    this.panel = this.wrap.querySelector('[data-popup="panel"]')
    this.closeButton = this.wrap.querySelector('[data-popup="close"]')
    this.backdrop = this.wrap.querySelector('[data-popup="backdrop"]')
    this.isOpen = false
  }

  init(): void {
    if (!this.trigger || !this.overlay || !this.panel) return

    this.trigger.addEventListener('click', () => this.open())
    this.closeButton?.addEventListener('click', () => this.close())
    this.backdrop?.addEventListener('click', () => this.close())
    this.overlay.addEventListener('click', (event: MouseEvent) => {
      if (event.target === this.overlay) this.close()
    })
    document.addEventListener('keydown', this.handleKeydown)
  }

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') this.close()
  }

  open(): void {
    if (this.isOpen || !this.overlay || !this.panel) return

    this.isOpen = true
    this.overlay.classList.remove('hidden')
    this.overlay.setAttribute('aria-hidden', 'false')

    gsap.set(this.overlay, { opacity: 0 })
    gsap.set(this.panel, { opacity: 0, y: 40 })

    gsap
      .timeline()
      .to(this.overlay, { opacity: 1, duration: 0.2, ease: 'power2.out' })
      .to(
        this.panel,
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
        '<'
      )
  }

  close(): void {
    if (!this.isOpen || !this.overlay || !this.panel) return

    gsap
      .timeline({
        onComplete: () => {
          this.overlay?.classList.add('hidden')
          this.overlay?.setAttribute('aria-hidden', 'true')
          this.isOpen = false
        }
      })
      .to(this.panel, { opacity: 0, y: 40, duration: 0.2, ease: 'power2.in' })
      .to(this.overlay, { opacity: 0, duration: 0.2, ease: 'power2.in' }, '<')
  }
}

export default Popup
