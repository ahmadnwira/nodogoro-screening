import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "./constants";

initializeApp(firebaseConfig);
export const db = getFirestore();
export const messagesCollection = collection(db, "messages");
