import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDRtn1AlRtbgd8X_aTUrUYlWkwM7nxPvBs",
  authDomain: "ggvca-goal-tracker.firebaseapp.com",
  projectId: "ggvca-goal-tracker",
  storageBucket: "ggvca-goal-tracker.firebasestorage.app",
  messagingSenderId: "835155144288",
  appId: "1:835155144288:web:e833c60128eab6d3c8dd05"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)