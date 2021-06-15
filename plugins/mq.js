import Vue from 'vue'
import mq from 'vue-mq'
 
Vue.use(mq, {
    breakpoints: { // default breakpoints - customize this
      sm: 769,
      md: 1250,
      lg: Infinity,
    }
  })