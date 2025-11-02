class Dropdown {
  private wrapper: Element
  private toggle: HTMLElement | null
  private menu: HTMLElement | null
  private selected: HTMLElement | null

  constructor(wrapper: Element) {
    this.wrapper = wrapper
    this.toggle = wrapper.querySelector('[data-dropdown="toggle"]')
    this.menu = wrapper.querySelector('[data-dropdown="menu"]')
    this.selected = wrapper.querySelector('.selected')
  }

  changeSelectedText(val: string): void {
    if (this.selected) this.selected.textContent = val
  }

  init(): void {
    if (!this.toggle || !this.menu) return

    this.toggle.addEventListener('click', () => {
      if (this.menu) this.menu.classList.toggle('hidden')
    })

    this.menu.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON') {
        this.changeSelectedText(target.textContent || '')
        if (this.menu) this.menu.classList.add('hidden')
      }
    })

    document.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement
      if (!this.wrapper.contains(target) && this.menu) {
        this.menu.classList.add('hidden')
      }
    })
  }
}

export default Dropdown
