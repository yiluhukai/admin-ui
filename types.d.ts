import { AxiosInstance } from 'axios'
import VueI18n from 'vue-i18n'

declare module 'vue/types/vue' {
	interface Vue {
		$title: string
		$axios: AxiosInstance
		//$t: VueI18n.PostTranslationHandler
	}
}
