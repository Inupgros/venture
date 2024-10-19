// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbylhUzAQJq4HJJsHxQ6UGs8mznxLOme0",
  authDomain: "venture-dad08.firebaseapp.com",
  projectId: "venture-dad08",
  storageBucket: "venture-dad08.appspot.com",
  messagingSenderId: "274103498288",
  appId: "1:274103498288:web:ad7c7df8b38a4362361ff5",
  measurementId: "G-WV6948VCG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
