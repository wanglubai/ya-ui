import createAPIComponent from "vue-create-api"

export default function createApi(Vue, Component, events, single) {
    Vue.use(createAPIComponent, { componentPrefix: 'ya-' });
    const api = Vue.createAPI(Component, events, single)
    return api;
}