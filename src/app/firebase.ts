// src/app/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9KP5PAiw5YkZUhRa9Uw9_FNmPYSxxe0k',
  authDomain: 'rishumishra.firebaseapp.com',
  projectId: 'rishumishra',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
