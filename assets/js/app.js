require ('../css/app.css');

import Vue from 'vue';
import Routes from './routes.js';
import App from './views/App';

const app = new Vue ({
    router: Routes,
    render: h => h(App)
}).$mount ('#app');

export default app;
