import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHJxoNcO0VExifZl8OQDuGcN3dW73knlU",
  authDomain: "house-market-place-e8a85.firebaseapp.com",
  projectId: "house-market-place-e8a85",
  storageBucket: "house-market-place-e8a85.appspot.com",
  messagingSenderId: "765595446788",
  appId: "1:765595446788:web:ff7048e661b536a10c8f51",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
