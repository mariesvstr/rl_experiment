// firebase-config.js
console.log('Loading Firebase configuration...');

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDxEUSrDlq0oGeV2WZXoKA_bD56boHXFf4",
  authDomain: "rlexperiment-destais-sevestre.firebaseapp.com",
  projectId: "rlexperiment-destais-sevestre",
  storageBucket: "rlexperiment-destais-sevestre.firebasestorage.app",
  messagingSenderId: "885456230758",
  appId: "1:885456230758:web:faa1a9aca5cc411252d0a7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('✅ Firebase initialized successfully');

// Fonction pour sauvegarder des données dans Firestore
export async function sendToFirebase(collectionName, data) {
    try {
        const { collection, addDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
        
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            timestamp: serverTimestamp()
        });
        
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Firebase write error:', error);
        return { success: false, error: error.message };
    }
}

export { db, firebaseConfig };