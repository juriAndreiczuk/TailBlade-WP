import barba from '@barba/core'
import appContext from './AppContext'
import { emitter } from './../core/Emitter'
import { delay } from './../core/utils'
import Page from './../core/Page'

class AppRouter {
  async start() {
    barba.init({
      sync: true,
      debug: true,
      transitions: [
        {
          async leave(data) {
            await delay(300)
            emitter.emit('changePage', data.next.namespace)
          },

          async once(data) {
            await delay(300)
            Page.firstLoading()
            emitter.emit('changePage', data.next.namespace)
          }
        }
      ],
      views: appContext.pages
    })
  }
}

export default AppRouter
