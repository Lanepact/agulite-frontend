import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhtnq9H_TpgMF6RunSBYmFSehnieaw4dE",
  authDomain: "agulite-56739.firebaseapp.com",
  projectId: "agulite-56739",
  storageBucket: "agulite-56739.appspot.com",
  messagingSenderId: "852990711302",
  appId: "1:852990711302:web:c92dfef25d685eb6895587",
  measurementId: "G-WLM93HHK8Q"
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"

