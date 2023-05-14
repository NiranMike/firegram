import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAk3pm5NZ9afe2TI7p4IW1SOVbohyB17R8",
  authDomain: "gallery-4599e.firebaseapp.com",
  projectId: "gallery-4599e",
  storageBucket: "gallery-4599e.appspot.com",
  messagingSenderId: "100878511218",
  appId: "1:100878511218:web:f3aca7ada580a073b3a6eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timeStamp = serverTimestamp;

export { projectFirestore, projectStorage, timeStamp}