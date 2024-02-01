import { createApp } from 'vue';
import App from './App.vue';
import PDFObjectPlugin from 'pdfobject-vue';

const app = createApp(App);
app.use(PDFObjectPlugin);
app.mount('#app');