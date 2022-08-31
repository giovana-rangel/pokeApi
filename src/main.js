import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {store} from './store/index';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column';
import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';
import ToastService from 'primevue/toastservice';
import Dialog from 'primevue/dialog';

import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.component('toast-msg', Toast);
app.component('btn-app', Button);
app.component('data-table', DataTable);
app.component('column-table', Column);
app.component('nav-bar', Menubar);
app.component('tab-view', TabView);
app.component('tab-panel', TabPanel);
app.component('card-panel', Card);
app.component('pop-modal', Dialog);
app.mount('#app');
