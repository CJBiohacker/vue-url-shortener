import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import vuetify from './plugins/vuetify';
import './styles/style.css';
import 'vuetify/styles';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas);
library.add(far);

app.use(vuetify).mount('#app');
