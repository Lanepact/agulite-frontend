import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhtnq9H_TpgMF6RunSBYmFSehnieaw4dE",
  authDomain: "agulite-56739.firebaseapp.com",
  projectId: "agulite-56739",
  storageBucket: "agulite-56739.appspot.com",
  messagingSenderId: "852990711302",
  appId: "1:852990711302:web:c92dfef25d685eb6895587",
  measurementId: "G-WLM93HHK8Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);