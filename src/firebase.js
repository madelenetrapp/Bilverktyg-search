import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYeULLLMlfkPQunwXdicHFEBC3OIUDRxs",
  authDomain: "bilverktyg-e3370.firebaseapp.com",
  projectId: "bilverktyg-e3370",
  storageBucket: "bilverktyg-e3370.firebasestorage.app",
  messagingSenderId: "276209588973",
  appId: "1:276209588973:web:48efc95f8844e120bc0ae4",
  measurementId: "G-8F5PCNRJV5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db