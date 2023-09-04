// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAceHO94Q8KzkEbHJtdNPFU0sT-3XcghDw",
  authDomain: "api-database-f1371.firebaseapp.com",
  projectId: "api-database-f1371",
  storageBucket: "api-database-f1371.appspot.com",
  messagingSenderId: "164151808022",
  appId: "1:164151808022:web:5515b65700951f27f6a537",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default app;
