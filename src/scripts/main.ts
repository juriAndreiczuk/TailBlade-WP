import './../styles/app.scss'
import './../img/right-arrow.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AppRouter from './app/AppRouter'

gsap.registerPlugin(ScrollTrigger)
window.ScrollTrigger = ScrollTrigger
window.gsap = gsap

const router = new AppRouter()

router.start()
