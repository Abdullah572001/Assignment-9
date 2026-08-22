// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq7P39Ykx9b9xuuEiU6P9H9uxVOaP1S-8",
  authDomain: "assignment-9-df03c.firebaseapp.com",
  projectId: "assignment-9-df03c",
  storageBucket: "assignment-9-df03c.firebasestorage.app",
  messagingSenderId: "360224226834",
  appId: "1:360224226834:web:cebbf3d3a74bbc0e5962cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
