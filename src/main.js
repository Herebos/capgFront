import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'

Vue.use(VueResource);
Vue.use(VueMoment);

library.add(faAngleDoubleUp)
library.add(faChevronCircleDown)
library.add(faEyeSlash)
library.add(faEye)
library.add(faCheckCircle)
library.add(faDotCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
