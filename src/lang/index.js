import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import en from './en'
import zh from './zh'

Vue.use(VueI18n)

const messages = {
	en: {
		message: 'hello',
		...en,
		...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
	},
	zh: {
		message: '你好',
		...zh,
		...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
	}
}
// Create VueI18n instance with options
const i18n = new VueI18n({
	locale: 'en', // set locale
	messages // set locale messages
})

Vue.use(Element, {
	i18n: (key, value) => i18n.t(key, value)
})

export default i18n
