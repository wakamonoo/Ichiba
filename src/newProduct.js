import { app } from "./firebaseAuth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

// ──────────────────────────────────────────submitNewProduct
const productImage = document.querySelector('#productImage');
const productTitle = document.querySelector('#productTitle');
const productPrice = document.querySelector('#productPrice');


