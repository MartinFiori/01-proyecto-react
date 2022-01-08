import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAWwhw9SpGSsr3kmVyi6De2SStmpT5byHw",
    authDomain: "estoybrillandocon-2b958.firebaseapp.com",
    projectId: "estoybrillandocon-2b958",
    storageBucket: "estoybrillandocon-2b958.appspot.com",
    messagingSenderId: "584284076535",
    appId: "1:584284076535:web:1a320d6e8642797d2d56f2",
    measurementId: "G-18W8W4ZHWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;