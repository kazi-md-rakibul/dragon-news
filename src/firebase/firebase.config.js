// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMQzlhMWA4sxW6M15DcW26RajA9XYBjM",
  authDomain: "dragon-news-d317f.firebaseapp.com",
  projectId: "dragon-news-d317f",
  storageBucket: "dragon-news-d317f.firebasestorage.app",
  messagingSenderId: "104722886850",
  appId: "1:104722886850:web:b4e12438289b07309dcb5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;