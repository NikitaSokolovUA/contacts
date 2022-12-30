import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCkwAuuFgHbZM_uSPYz_gr5Ghye6sXQOrE',
  authDomain: 'db-for-np.firebaseapp.com',
  projectId: 'db-for-np',
  storageBucket: 'db-for-np.appspot.com',
  messagingSenderId: '916851537995',
  appId: '1:916851537995:web:91c6b467b823fc404a35ce',
  measurementId: 'G-L6SKEZ5MBM',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
