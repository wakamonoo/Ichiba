// ────────────────────────────────────────── import
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
 
// ────────────────────────────────────────── firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyBumCNQ6ZZvB1_pS_Ru5swuONr6lOzruf4",
  authDomain: "ichiba-765b8.firebaseapp.com",
  projectId: "ichiba-765b8",
  storageBucket: "ichiba-765b8.firebasestorage.app",
  messagingSenderId: "838391721490",
  appId: "1:838391721490:web:49c3ca61abc4cad202b2cb",
  measurementId: "G-ZZ3D31Z5SD"
};

// ────────────────────────────────────────── fiebaseInitialization
const app = getApps().lenth? getApss()[0] : initializeApp(firebaseConfig);
getAnalytics(app);

// ────────────────────────────────────────── authHelpers
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function googleSignIn() {
  const { user } = await signInWithPopup(auth, provider);
  return user ?? null;
}

export function googleSignOut() {
  return signOut(auth);
}

export function onUserChanged(cb) {
  return onAuthStateChanged(auth, cb);
}

export {auth, app};