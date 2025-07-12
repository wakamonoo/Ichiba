// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBumCNQ6ZZvB1_pS_Ru5swuONr6lOzruf4",
  authDomain: "ichiba-765b8.firebaseapp.com",
  projectId: "ichiba-765b8",
  storageBucket: "ichiba-765b8.firebasestorage.app",
  messagingSenderId: "838391721490",
  appId: "1:838391721490:web:49c3ca61abc4cad202b2cb",
  measurementId: "G-ZZ3D31Z5SD"
};

// Initialize Firebase
const app = getApps().lenth? getApss()[0] : initializeApp(firebaseConfig);
getAnalytics(app);

export default app;