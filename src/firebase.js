import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV6P02ziTzT7HMhJfYH7P86-lqOm-rj1M",
  authDomain: "medical-analysis-d66a0.firebaseapp.com",
  projectId: "medical-analysis-d66a0",
  storageBucket: "medical-analysis-d66a0.appspot.com",
  messagingSenderId: "55226716247",
  appId: "1:55226716247:web:5013513f693b842e121312"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export{firebase}




  
