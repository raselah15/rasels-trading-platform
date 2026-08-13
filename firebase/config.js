import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIJdSy857aTqN6Saisy51HyhpSvQs8FAg",
  authDomain: "rasel-trading-platform.firebaseapp.com",
  projectId: "rasel-trading-platform",
  storageBucket: "rasel-trading-platform.firebasestorage.app",
  messagingSenderId: "34501911446",
  appId: "1:34501911446:web:42e1b8e2378106d14fb3b7",
  measurementId: "G-M9EQECN9HE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
