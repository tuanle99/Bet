import { createApp } from "vue";

import App from "./App.vue";
import TheTitle from "./components/UI/TheTitle.vue";

const app = createApp(App);

app.component("the-title", TheTitle);

app.mount("#app");
