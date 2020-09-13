import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import i18n from './lang/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$tt = function(chinese = '', english = '') {
	return this.$t('options.option', { label: this.$i18n.locale == 'zh' ? chinese : english })
}

Vue.prototype.$ttt = function({ label, labelEN }) {
	return this.$tt(label, labelEN)
}

new Vue({
	router,
	i18n,
	render: h => h(App)
}).$mount('#app')
