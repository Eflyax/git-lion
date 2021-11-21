import {createApp} from 'vue';
import {loadFonts} from './plugins/webfontloader';
import App from './App.vue';
import vuetify from './plugins/vuetify';

loadFonts();

createApp(App)
	.use(vuetify)
	.mount('#app');
