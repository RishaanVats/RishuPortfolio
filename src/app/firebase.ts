// src/app/firebase.ts
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  projectId: environment.firebase.projectId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
