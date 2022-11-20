import {initializeApp} from  "firebase/app";
import { getFirestore } from  "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArjFz19Qb18zipT9r5evv41YN5hRNGy2o",
  authDomain: "todo-app-f5d7d.firebaseapp.com",
  projectId: "todo-app-f5d7d",
  storageBucket: "todo-app-f5d7d.appspot.com",
  messagingSenderId: "363586441075",
  appId: "1:363586441075:web:b0b0ab06194bf864313f06"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase)
export const storage = getStorage(firebase)
export default firebase;