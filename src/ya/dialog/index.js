import Dialog from './dialog.vue'
import createAPI from '../common/utils/creat-api'

Dialog.install = function (Vue) {
    Vue.component(Dialog.name, Dialog)
    createAPI(Vue, Dialog, ['confirm', 'cancel', 'close', 'btn-click', 'link-click'], true)
}

export default Dialog;