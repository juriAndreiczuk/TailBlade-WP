import type { IAppState, IPage } from './../types/core.types'
import type { IHeader, IFooter } from './../types/modules.types'
import { emitter } from './Emitter'
// modules
import Header from '../modules/layout/Header'
import Footer from '../modules/layout/Footer'
// pages
import Error from '../pages/Error'
import Homepage from '../pages/Homepage'
import Posts from '../pages/Posts'

class AppState implements IAppState {
  currentPage: string
  header: IHeader
  footer: IFooter
  pages: IPage[]

  constructor() {
    this.currentPage = ''

    emitter.subscribe('changePage', (val: string) => {
      this.currentPage = val
    })
    this.pages = [Error, Homepage, Posts]
    this.header = new Header('.header')
    this.footer = new Footer('.footer')
  }
}

const appState = new AppState()

export default appState
