import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    once: false,
    duration: 1000,
    delay: 0,
    easing: 'ease-out-quart',
  })
)
