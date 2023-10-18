// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJMrJEDwgQ6dnoQb7dw9dOIUnAhF0jqXY",
  authDomain: "drive-wave-client.firebaseapp.com",
  projectId: "drive-wave-client",
  storageBucket: "drive-wave-client.appspot.com",
  messagingSenderId: "362413223110",
  appId: "1:362413223110:web:cb4e224c35fa86178f7bc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
