import { createApp } from 'vue';
import pinia from '/@/stores/index';
import App from '/@/App.vue';
import router from '/@/router/index';
import { directive } from '/@/directive/index';
import { i18n } from '/@/i18n/index';
import other from '/@/utils/other';

import ElementPlus from 'element-plus';
import 'virtual:svg-icons-register'
import '/@/theme/index.scss';
import VueGridLayout from 'vue-grid-layout';

import plugins from './plugins/index.js' // plugins

import './permission.js' // permission control

const app = createApp(App);

directive(app);
other.elSvg(app);

app.use(pinia)
app.use(router)
app.use(plugins)
app.use(ElementPlus)
app.use(i18n)
app.use(VueGridLayout)
app.mount('#app');
