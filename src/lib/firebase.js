import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./constants";

initializeApp(firebaseConfig);
export const db = getFirestore();
export const messagesCollection = collection(db, "messages");

const usersCountDocRef = doc(db, "usersInCall", "usersCount");
export const getUsersCount = async () => {
  const docSnap = await getDoc(usersCountDocRef);
  return docSnap.data().count || 0;
};
export const updateUsersCount = (usersCount) => {
  updateDoc(usersCountDocRef, {
    count: usersCount,
  });
};
