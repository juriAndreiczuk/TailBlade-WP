import type { IAppContext, IPage } from '../types/core.types'
import type { IHeader, IFooter } from '../types/modules.types'
import { emitter } from './../core/Emitter'
// modules
import Header from '../modules/layout/Header'
import Footer from '../modules/layout/Footer'
// pages
import Error from '../pages/Error'
import Homepage from '../pages/Homepage'
import Posts from '../pages/Posts'

class AppContext implements IAppContext {
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

const appContext = new AppContext()

export default appContext
