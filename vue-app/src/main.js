import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import './assets/base.css'; // File tambahan untuk styling dasar
import CompositionComponent from './components/CompositionComponent.vue';
import OptionsComponent from './components/OptionsComponent.vue';
import MainButton from './components/MainButton.vue';
import ContactForm from './components/ContactForm.vue';

const app = createApp(App);

// Mendaftarkan komponen secara global
app.component('CompositionComponent', CompositionComponent);
app.component('OptionsComponent', OptionsComponent);
app.component('MainButton', MainButton)
app.component('ContactForm', ContactForm)

app.mount('#app');