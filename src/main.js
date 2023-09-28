import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import '@/assets/css/global.scss';
import '@/store/touchy';

const app = createApp(App).use(router).mount('#app');
