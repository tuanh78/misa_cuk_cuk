import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faAngleDown, faExclamationTriangle, faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import velocity from 'velocity-animate'
import Notifications from 'vue-notification'
// modal
import './quasar'

library.add(faUserSecret, faAngleDown, faExclamationTriangle, faTimes, faCheckCircle)

Vue.use(Notifications, { velocity })

// end

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
