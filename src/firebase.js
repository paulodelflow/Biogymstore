
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCp2E3BkiNHfCx-MeXH0MCOiAb_T9mvfbs",
  authDomain: "biogymstore-888f5.firebaseapp.com",
  projectId: "biogymstore-888f5",
  storageBucket: "biogymstore-888f5.appspot.com",
  messagingSenderId: "406135129432",
  appId: "1:406135129432:web:a81c48e4f5f56daf95112d",
  measurementId: "G-RGYNXN46JH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);