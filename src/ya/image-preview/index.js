import ImagePreview from './image-preview.vue'
import createAPI from '../common/utils/creat-api'

ImagePreview.install = function (Vue) {
    Vue.component(ImagePreview.name, ImagePreview)
    createAPI(Vue, ImagePreview, ['change', 'hide'], true)
}

export default ImagePreview;