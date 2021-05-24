import Vue from 'vue'

import './styles/quasar.scss'
// import '@quasar/extras/material-icons/material-icons.css'
import iconSet from 'quasar/icon-set/mdi-v5'
import '@quasar/extras/mdi-v5/mdi-v5.css'
import { Quasar } from 'quasar'
Vue.use(Quasar, {
  config: {},
  plugins: {
  },
  iconSet: iconSet
})
