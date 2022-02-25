import Toast from './toast.vue'
import createAPI from '../common/utils/creat-api'

Toast.install = function (Vue) {
    Vue.component(Toast.name, Toast)
    createAPI(Vue, Toast, ['timeout'], true)
}

export default Toast;