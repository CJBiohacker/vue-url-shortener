import { createApp } from "vue";
import App from "./App.vue";
import vueI18n from "./plugins/i18n";
import vuetify from "./plugins/vuetify";

import "vuetify/styles";
import "./styles/style.css";

const app = createApp(App);

app.use(vuetify);
app.use(vueI18n);
app.mount("#app");
