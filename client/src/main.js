import {createApp} from 'vue';
import {loadFonts} from './plugins/webfontloader';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';

loadFonts();

createApp(App)
	.use(vuetify)
	.use(router)
	.mount('#app');
