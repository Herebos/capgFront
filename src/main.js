import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faUser, faLock,faUserCircle,faBell, faBellSlash,faCalendarAlt,faCog,faUserCog, faChevronCircleDown, faEyeSlash, faEye, faCheckCircle, faDotCircle, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
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
library.add(faUser)
library.add(faLock)
library.add(faUserCircle)
library.add(faBell)
library.add(faBellSlash)
library.add(faCalendarAlt)
library.add(faCog)
library.add(faUserCog)
library.add(faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
