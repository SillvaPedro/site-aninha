import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5vRoLUxG0YDZGIzkbo3RnXZRALZ9iSmA",
    authDomain: "aninhaagendamentos.firebaseapp.com",
    projectId: "aninhaagendamentos",
    storageBucket: "aninhaagendamentos.firebasestorage.app",
    messagingSenderId: "742357928520",
    appId: "1:742357928520:web:06c82ee1cecfd11132667d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);